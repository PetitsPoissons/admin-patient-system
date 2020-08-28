const router = require('express').Router();
const { Client } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Client.create(req.body)
  .then(dbClientData => res.json(dbClientData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Client.findAll({
    //attributes: { exclude: ['password'] }
  })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;