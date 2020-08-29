const router = require('express').Router();
const { IsDiagnosed, User, Client, Diagnosis } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  IsDiagnosed.create(req.body)
  .then(dbIsDiagnosedData => res.json(dbIsDiagnosedData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
    IsDiagnosed.findAll({
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Diagnosis,
        attributes: ['dx_name']
      }
    ]
  })
  .then(dbIsDiagnosedData => res.json(dbIsDiagnosedData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
    IsDiagnosed.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name']
      },
      {
        model: Diagnosis,
        attributes: ['dx_name']
      }
    ]
  })
  .then(dbIsDiagnosedData => {
    if (!dbIsDiagnosedData) {
      res.status(404).json({ message: 'No occurrence found' });
      return;
    }
    res.json(dbIsDiagnosedData)
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
    IsDiagnosed.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbIsDiagnosedData => {
    if (!dbIsDiagnosedData[0]) {
      res.status(404).json({ message: 'No occurrence found' });
      return;
    }
    res.json(dbIsDiagnosedData);
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
    IsDiagnosed.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbIsDiagnosedData => {
    if (!dbIsDiagnosedData) {
      res.status(404).json({ message: 'No occurrence found' });
      return;
    }
    res.json(dbIsDiagnosedData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;