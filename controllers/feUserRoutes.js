const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Access, Client } = require('../models');

///////////////////////////
// render users template //
///////////////////////////

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

      // serialize data
      let users = dbUserData.map(user => user.get({ plain: true }));
      
      // check user's access type
      let super_access = false;
      let admin_access = false;
      let shrink_access = false;
      let basic_access = false;
      let biller_access = false;
      switch(req.session.access_id) {
        case 1:
          super_access = true;
          break;
        case 2:
          admin_access = true;
          break;
        case 3:
          shrink_access = true;
          users = users.filter(user => user.user_id === req.session.user_id);
          break;
        case 4:
          basic_access = true;
          break;
        case 5:
          biller_access = true;
          break;
      }
      
      // render template with data and access info
      res.render('users', { users, super_access, admin_access, shrink_access, basic_access, biller_access });
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