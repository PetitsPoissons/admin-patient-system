const router = require('express').Router();
const { Record, Form, Treatment } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Record.create(req.body)
  .then(dbRecordData => res.json(dbRecordData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Record.findAll({
    attributes: ['record_date'],
    include: [
      {
        model: Form,
        attributes: ['form_name']
      },
      {
        model: Treatment,
        attributes: ['tx_date']
      }]
        // {
        //   model: Client,
        //   attributes: ['first_name', 'last_name']
        //   // include: [{
        //   //   model: Diagnosis,
        //   //   attributes: ['dx_code', 'dx_name'],
        //   //   through: {
        //   //     model: IsDiagnosed,
        //   //     attributes: ['dx_date']
        //   //   }
        //   // }]
        // }
  })
  .then(dbRecordData => res.json(dbRecordData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Record.findAll({
    where: {
      record_id: req.params.id
    },
    attributes: ['record_date'],
    include: [
      {
        model: Form,
        attributes: ['form_name']
      },
      {
        model: Treatment,
        attributes: ['tx_date']
      }]
        // {
        //   model: Client,
        //   attributes: ['first_name', 'last_name']
        //   // include: [{
        //   //   model: Diagnosis,
        //   //   attributes: ['dx_code', 'dx_name'],
        //   //   through: {
        //   //     model: IsDiagnosed,
        //   //     attributes: ['dx_date']
        //   //   }
        //   // }]
        // }
  })
  .then(dbRecordData => {
    if (!dbRecordData) {
      res.status(404).json({ message: "This treatment was not found" });
      return;
    }
    res.json(dbRecordData)
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
  Record.update(req.body, {
    where: {
      record_id: req.params.id
    }
  })
  .then(dbRecordData => {
    if (!dbRecordData[0]) {
      res.status(404).json({ message: 'This record was not found' });
      return;
    }
    res.json(dbRecordData);
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
  Record.destroy({
    where: {
      record_id: req.params.id
    }
  })
  .then(dbRecordData => {
    if (!dbRecordData) {
      res.status(404).json({ message: 'This record was not found' });
      return;
    }
    res.json(dbRecordData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;