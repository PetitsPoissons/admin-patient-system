const router = require('express').Router();
const { Treatment, Relation, User, Client, Procedure } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Treatment.create(req.body)
  .then(dbTxData => res.json(dbTxData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Treatment.findAll({
    attributes: ['tx_date'],
    include: [
      {
        model: Relation,
        attributes: ['start_date', 'end_date'],
        include: [{
          model: User,
          attributes: ['first_name', 'last_name']
        },
        {
          model: Client,
          attributes: ['first_name', 'last_name']
          // include: [{
          //   model: Diagnosis,
          //   attributes: ['dx_code', 'dx_name'],
          //   through: {
          //     model: IsDiagnosed,
          //     attributes: ['dx_date']
          //   }
          // }]
        }]
      },
      {
        model: Procedure,
        attributes: ['procedure_name', 'cpt_code', 'procedure_desc', 'duration']
      }
      // {
      //   model: Form,
      //   attributes: ['form_name'],
      //   through: {
      //     model: Record,
      //     attributes: ['record_date']
      //   }
      // }
    ]
  })
  .then(dbTxData => res.json(dbTxData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Treatment.findOne({
    where: {
      tx_id: req.params.id
    },
    include: [
      {
        model: Relation,
        attributes: ['start_date', 'end_date'],
        include: [{
          model: User,
          attributes: ['first_name', 'last_name']
        },
        {
          model: Client,
          attributes: ['first_name', 'last_name']
          // include: [{
          //   model: Diagnosis,
          //   attributes: ['dx_code', 'dx_name'],
          //   through: {
          //     model: IsDiagnosed,
          //     attributes: ['dx_date']
          //   }
          // }]
        }]
      },
      {
        model: Procedure,
        attributes: ['procedure_name', 'cpt_code', 'procedure_desc', 'duration']
      }
      // {
      //   model: Form,
      //   attributes: ['form_name'],
      //   through: {
      //     model: Record,
      //     attributes: ['record_date']
      //   }
      // }
    ]
  })
  .then(dbTxData => {
    if (!dbTxData) {
      res.status(404).json({ message: "This treatment was not found" });
      return;
    }
    res.json(dbTxData)
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
  Treatment.update(req.body, {
    where: {
      tx_id: req.params.id
    }
  })
  .then(dbTxData => {
    if (!dbTxData[0]) {
      res.status(404).json({ message: 'This treatment was not found' });
      return;
    }
    res.json(dbTxData);
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
  Treatment.destroy({
    where: {
      tx_id: req.params.id
    }
  })
  .then(dbTxData => {
    if (!dbTxData) {
      res.status(404).json({ message: 'This treatment was not found' });
      return;
    }
    res.json(dbTxData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;