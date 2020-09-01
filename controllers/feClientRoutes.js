const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, User, Relation } = require('../models');

// display all clients
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      Client.findAll({
        attributes: ['client_id', 'first_name', 'last_name', 'email', 'primary_phone', 'alt_phone'],
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name'],
            through: {
                model: Relation
            }
          }
        ],
        order: ['last_name']
      })
      .then(dbClientData => {
        const clients = dbClientData.map(client => client.get({ plain: true }));
        res.render('clients', { clients });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    } else {
      res.render('login');
    }
});

// render single-client template - READONLY
router.get('/:id', (req, res) => {
  if (req.session.loggedIn) {
    Client.findOne({
      attributes: {
        include: [
          'first_name', 'last_name', 'dob', 'ssn', 'email', 'primary_phone', 'alt_phone', 
          'street_address', 'city', 'state', 'zip', 'insurance', 'active', [sequelize.literal(
            '(SELECT COUNT(DISTINCT relation.user_id) FROM relation WHERE client.client_id = relation.client_id)'
          ), 'clinicians_nb']
        ]
      },
      where: {
        client_id: req.params.id
      }
    })
    .then(dbClientData => {
      if (!dbClientData) {
        res.status(404).json({ message: 'No client found' });
        return;
      }
      // serialize the data
      const client = dbClientData.get({ plain: true });
      // pass data to template
      res.render('single-client', { client });
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

// render single-client template - EDIT FORM
router.get('/edit/:id', (req, res) => {
  if (req.session.loggedIn) {
    Client.findOne({
      attributes: {
        include: [
          'first_name', 'last_name', 'dob', 'ssn', 'email', 'primary_phone', 'alt_phone', 
          'street_address', 'city', 'state', 'zip', 'insurance', 'active', [sequelize.literal(
            '(SELECT COUNT(DISTINCT relation.user_id) FROM relation WHERE client.client_id = relation.client_id)'
          ), 'clinicians_nb']
        ]
      },
      where: {
        client_id: req.params.id
      }
    })
    .then(dbClientData => {
      if (!dbClientData) {
        res.status(404).json({ message: 'No client found' });
        return;
      }
      // serialize the data
      const client = dbClientData.get({ plain: true });
      // pass data to template
      res.render('edit-single-client', { client });
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