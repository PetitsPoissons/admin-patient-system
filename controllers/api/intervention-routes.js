// const router = require('express').Router();
// const { Intervention, User, Client, Procedure, Document } = require('../../models');

/******************/
/***** CREATE *****/
/******************/
/*
router.post('/', (req, res) => {
  Intervention.create(req.body)
  .then(dbInterventionData => res.json(dbInterventionData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
*/
/******************/
/****** READ ******/
/******************/
/*
router.get('/', (req, res) => {
  Intervention.findAll({
    include: [
      {
        model: User,
        attributes: ['user_id', 'first_name', 'last_name']
      },
      {
        model: Client,
        attributes: ['client_id', 'first_name', 'last_name']
      },
      {
        model: Procedure,
        attributes: ['procedure_id', 'procedure_name']
      },
      {
        model: Document,
        attributes: ['document_id', 'document_name']
      }
    ]
  })
  .then(dbInterventionData => res.json(dbInterventionData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Intervention.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['user_id', 'first_name', 'last_name']
      },
      {
        model: Client,
        attributes: ['client_id', 'first_name', 'last_name']
      },
      {
        model: Procedure,
        attributes: ['procedure_id', 'procedure_name']
      },
      {
        model: Document,
        attributes: ['document_id', 'document_name']
      }
    ]
  })
  .then(dbInterventionData => {
    if (!dbInterventionData) {
      res.status(404).json({ message: 'This record was not found' });
      return;
    }
    res.json(dbInterventionData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;*/