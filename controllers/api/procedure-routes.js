const router = require('express').Router();
const { Procedure } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Procedure.create(req.body)
  .then(dbProcedureData => res.json(dbProcedureData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Procedure.findAll()
    .then(dbProcedureData => res.json(dbProcedureData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;