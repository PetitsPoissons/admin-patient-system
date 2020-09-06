const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, Relation, Treatment, Procedure } = require('../models');

///////////////////////////////////////////////////////////////
// render template to create a new client for this clinician //
///////////////////////////////////////////////////////////////

router.get('/client/new', (req, res) => {
  if (req.session.loggedIn) {
    res.render('dash-create-client');
  }
  else {
    res.render('login');
  }
});

///////////////////////////////////////////////////////////////
// render template to display all clients for this clinician //
///////////////////////////////////////////////////////////////

router.get('/', (req, res) => {
  Relation.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['relation_id', 'user_id', 'client_id', 'start_date', 'end_date', [sequelize.literal(
      '(SELECT COUNT(DISTINCT treatment.tx_date) FROM treatment WHERE treatment.relation_id = relation.relation_id)'
    ), 'tx_dates_nb']],
    include: [
      {
        model: Client,
        attributes: ['first_name', 'last_name', 'email', 'primary_phone']
      }
    ],
    order: ['start_date']
  })
  .then(dbRelationData => {
    // serialize data
    const relations = dbRelationData.map(relation => relation.get({ plain: true }));
    // render data
    res.render('dashboard', { relations, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

///////////////////////////////////////////////////////////////
// display all treatments for this client-clinician relation //
///////////////////////////////////////////////////////////////

router.get('/tx/:id', (req, res) => {
  req.session.save(() => {
    req.session.relation_id = req.params.id;
  });
  console.log('***************req.session', req.session);
  Treatment.findAll({
    where: {
      relation_id: req.params.id
    },
    attributes: ['tx_date'],
    include: [
      {
        model: Procedure,
        attributes: ['procedure_name', 'cpt_code', 'duration']
      },
      {
        model: Relation,
        attributes: ['relation_id'],
        include: {
          model: Client,
          attributes: ['client_id', 'first_name', 'last_name', 'active', 'dob', 'ssn', 'email', 'primary_phone', 'alt_phone', 'street_address', 'city', 'state', 'zip']
        }
      }
    ],
    order: ['tx_date']
  })
  .then(dbTxData => {
    // serialize data
    const treatments = dbTxData.map(tx => tx.get({ plain: true }));
    const client = treatments[0].relation.client;
    // render data
    res.render('treatments', { treatments, client, loggedIn: true });
  })
})

///////////////////////////////////////////////////////
// render dashboard-edit-client template - EDIT FORM //
///////////////////////////////////////////////////////

router.get('/tx/edit/client/:id', (req, res) => {
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
      // pass data and relation_id to template
      res.render('dash-edit-client', { client });
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