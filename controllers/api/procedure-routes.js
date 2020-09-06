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

router.get('/:id', (req, res) => {
  Procedure.findOne({
    where: {
      procedure_id: req.params.id
    }
  })
    .then(dbProcedureData => {
      if (!dbProcedureData) {
        res.status(404).json({ message: 'This procedure was not found' });
        return;
      }
      res.json(dbProcedureData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/******************/
/***** UPDATE *****/
/******************/

router.put('/:id', (req, res) => {
  Procedure.update(req.body, {
    where: {
      procedure_id: req.params.id
    }
  })
  .then(dbProcedureData => {
    if (!dbProcedureData[0]) {
      res.status(404).json({ message: 'This procedure was not found' });
      return;
    }
    res.json(dbProcedureData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/***** DELETE *****/
/******************/

router.delete('/:id', (req, res) => {
  Procedure.destroy({
    where: {
      procedure_id: req.params.id
    }
  })
  .then(dbProcedureData => {
    if (!dbProcedureData) {
      res.status(404).json({ message: 'This procedure was not found' });
      return;
    }
    res.json(dbProcedureData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;