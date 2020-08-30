const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, User, Relation } = require('../models');

// display all clients
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        Client.findAll({
            attributes: ['first_name', 'last_name', 'email', 'primary_phone', 'alt_phone'],
            include: [
              {
                model: User,
                attributes: ['first_name', 'last_name'],
                through: {
                    model: Relation,
                    attributes: ['start_date']
                }
              }
            ]
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

// render single-client template
router.get('/:id', (req, res) => {
    Client.findOne({
      attributes: {
        include: [
          'first_name', 'last_name', 'dob', 'ssn', 'email', 'primary_phone', 'alt_phone', 
          'street_address', 'city', 'state', 'zip', 'gender', 'ethnicity', 
          'relationship_status', 'employment_status', 'preferred_language', 'referred_by' [sequelize.literal(
            '(SELECT COUNT(DISTINCT relation.client_id) FROM relation WHERE client.client_id = relation.client_id)'
          ), 'clients_nb']
        ]
      },
      where: {
        client_id: req.params.id
      },
      include: [
        // {
        //   model: Access,
        //   attributes: ['access_type', 'access_desc']
        // },
        // {
        //   model: Client,
        //   attributes: ['first_name', 'last_name', 'primary_phone', 'alt_phone', 'email'],
        //   through: {
        //     model: Relation,
        //     attributes: ['start_date', 'end_date']
        //   }
        // }
      ]
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
});

module.exports = router;