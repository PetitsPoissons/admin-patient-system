const router = require('express').Router();
const { Diagnosis } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Diagnosis.create(req.body)
  .then(dbDiagnosisData => res.json(dbDiagnosisData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Diagnosis.findAll({
  })
    .then(dbDiagnosisData => res.json(dbDiagnosisData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Diagnosis.findOne({
    where: {
      dx_id: req.params.id
    }
  })
  .then(dbDiagnosisData => {
    if (!dbDiagnosisData) {
      res.status(404).json({ message: 'No Diagnosis found' });
      return;
    }
    res.json(dbDiagnosisData);
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
  Diagnosis.update(req.body, {
    where: {
      dx_id: req.params.id
    }
  })
  .then(dbDiagnosisData => {
    console.log(dbDiagnosisData);
    if (!dbDiagnosisData[0]) {
      res.status(404).json({ message: 'No diagnosis found' });
      return;
    }
    res.json(dbDiagnosisData);
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
  Diagnosis.destroy({
    where: {
      dx_id: req.params.id
    }
  })
  .then(dbDiagnosisData => {
    if (!dbDiagnosisData) {
      res.status(404).json({ message: 'No diagnosis found '});
      return;
    }
    res.json(dbDiagnosisData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;