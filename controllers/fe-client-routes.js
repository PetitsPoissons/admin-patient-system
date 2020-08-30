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

module.exports = router;