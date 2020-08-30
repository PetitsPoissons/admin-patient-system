const router = require('express').Router();
const { IsDiagnosed, User, Client, Relation, Diagnosis } = require('../../models');

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
    attributes: ['id', 'relation_id', 'dx_id', 'dx_date'],
    include: [
      {
        model: Relation,
        attributes: ['relation_id', 'start_date', 'end_date'],
        include: [{
          model: User,
          attributes: ['user_id', 'first_name', 'last_name']
        },
        {
          model: Client,
          attributes: ['client_id', 'first_name', 'last_name']
        }]
      },
      {
        model: Diagnosis,
        attributes: ['dx_id', 'dx_name', 'dx_code', 'dx_desc']
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
    attributes: ['id', 'relation_id', 'dx_id', 'dx_date'],
    include: [
      {
        model: Relation,
        attributes: ['relation_id', 'start_date', 'end_date'],
        include: [{
          model: User,
          attributes: ['user_id', 'first_name', 'last_name']
        },
        {
          model: Client,
          attributes: ['client_id', 'first_name', 'last_name']
        }]
      },
      {
        model: Diagnosis,
        attributes: ['dx_id', 'dx_name', 'dx_code', 'dx_desc']
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