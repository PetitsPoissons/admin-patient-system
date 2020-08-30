const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Access } = require('../models');

// display all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: ['user_id', 'first_name', 'last_name', 'email', 'primary_phone'],
    include: [
      {
        model: Access,
        attributes: ['access_type']
      }
    ]
  })
  .then(dbUserData => {
    const users = dbUserData.map(user => user.get({ plain: true }));
    res.render('users', { users });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// render single-user template
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: {
      include: [
        'first_name', 'last_name', 'username', 'password', 'street_address', 'city', 'state', 'zip', 'active', [sequelize.literal(
          '(SELECT COUNT(DISTINCT record.client_id) FROM record WHERE user.user_id = record.user_id)'
        ), 'clients_nb']
      ],
      //exclude: ['password']
    },
    where: {
      user_id: req.params.id
    },
    include: [
      {
        model: Access,
        attributes: ['access_id', 'access_type', 'access_desc']
      },
      {
        model: Client,
        attributes: [
          'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
          '(SELECT COUNT(*) FROM record WHERE clients.client_id = record.client_id)'
          ), 'records_nb']
        ],
        through: {
          model: Record,
          attributes: ['date']
        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found' });
      return;
    }
    // serialize the data
    const user = dbUserData.get({ plain: true });
    // pass data to template
    res.render('single-user', { user });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;