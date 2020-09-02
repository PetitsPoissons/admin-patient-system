const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, Relation, Treatment, Procedure } = require('../models');

////////////////////////////////////////////
// display all clients for this clinician //
////////////////////////////////////////////

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
  Treatment.findAll({
    where: {
      relation_id: req.params.id
    },
    attributes: ['tx_date'],
    include: [
      {
        model: Procedure,
        attributes: ['procedure_name', 'cpt_code', 'duration']
      }
    ],
    order: ['tx_date']
  })
  .then(dbTxData => {
    // serialize data
    const treatments = dbTxData.map(tx => tx.get({ plain: true }));
    console.log(treatments);
    // render data
    res.render('treatments', { treatments, loggedIn: true });
  })
})


module.exports = router;