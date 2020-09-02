const router = require('express').Router();
const sequelize = require('../config/connection');
const { Client, User, Relation } = require('../models');

router.get('/', (req, res) => {
  Relation.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['relation_id', 'user_id', 'client_id', 'start_date', 'end_date'],
    order: ['start_date']
  })
  .then(dbRelationData => {
    // serialize data
    const relations = dbRelationData.map(relation => relation.get({ plain: true }));
    res.render('dashboard', { relations, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;