const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Access, Client, Relation } = require('../models');

// render all users depending on user's access level -> RESTRICTION TO BE ADDED
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    User.findAll({
      attributes: ['user_id', 'first_name', 'last_name', 'email', 'primary_phone', 'access_id'],
      include: [
        {
          model: Access,
          attributes: ['access_type']
        }
      ],
      order: ['last_name']
    })
    .then(dbUserData => {
      const users = dbUserData.map(user => user.get({ plain: true }));
      res.render('users', { users });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  else {
    res.render('login');
  }
});

// render create-user template
router.get('/new', (req, res) => {
  if (req.session.loggedIn) {
    res.render('create-user');
  }
  else {
    res.render('login');
  }
})

// render single-user template - READONLY
router.get('/:id', (req, res) => {
  if (req.session.loggedIn) {
    User.findOne({
      attributes: {
        include: [
          'first_name', 'last_name', 'dob', 'ssn', 'username', 'password', 'active', 'email', 'primary_phone', 'alt_phone', 'street_address', 'city', 'state', 'zip', [sequelize.literal(
            '(SELECT COUNT(DISTINCT relation.client_id) FROM relation WHERE user.user_id = relation.user_id)'
          ), 'clients_nb']
        ]
      },
      where: {
        user_id: req.params.id
      },
      include: [
        {
          model: Access,
          attributes: ['access_type', 'access_desc']
        },
        {
          model: Client,
          attributes: ['client_id', 'first_name', 'last_name', 'primary_phone', 'email', 'active']
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
  }
  else {
    res.render('login');
  }
});

// render single-user template - EDIT FORM
router.get('/edit/:id', (req, res) => {
  if (req.session.loggedIn) {
    User.findOne({
      attributes: {
        include: [
          'first_name', 'last_name', 'dob', 'ssn', 'username', 'password', 'active', 'email', 'primary_phone', 'alt_phone', 'street_address', 'city', 'state', 'zip', [sequelize.literal(
            '(SELECT COUNT(DISTINCT relation.client_id) FROM relation WHERE user.user_id = relation.user_id)'
          ), 'clients_nb']
        ]
      },
      where: {
        user_id: req.params.id
      },
      include: [
        {
          model: Access,
          attributes: ['access_type', 'access_desc']
        },
        {
          model: Client,
          attributes: ['first_name', 'last_name', 'primary_phone', 'alt_phone', 'email']
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
      res.render('edit-single-user', { user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
  else {
    res.render('login');
  }
});

module.exports = router;