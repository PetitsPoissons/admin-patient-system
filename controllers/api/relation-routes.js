const router = require('express').Router();
// const { Relation, User, Client, Procedure, Access, Diagnosis, IsDiagnosed, Treatment, Form, Record } = require('../../models');
const { Relation, User, Client, Access } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Relation.create(req.body)
  .then(dbRelationData => res.json(dbRelationData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Relation.findAll({
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name'],
        include: [{
            model: Access,
            attributes: ['access_type']
          }]
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name']
        // include: [{
        //     model: Diagnosis,
        //     attributes: ['dx_code', 'dx_name'],
        //     through: {
        //       model: IsDiagnosed,
        //       attributes: ['dx_date']
        //     }
        //   }]
      }
      // {
      //   model: Procedure,
      //   attributes: ['procedure_name', 'duration'],
      //   through: {
      //     model: Treatment,
      //     attributes: ['tx_date'],
      //     include: [{
      //         model: Form,
      //         attributes: ['form_name'],
      //         through: {
      //           model: Record,
      //           attributes: ['record_date']
      //         }
      //       }]
      //   }
      // }
    ]
  })
  .then(dbRelationData => res.json(dbRelationData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Relation.findOne({
    where: {
      relation_id: req.params.id
    },
    include: [
      {
        model: User,
        attributes: ['first_name', 'last_name'],
        include: [{
            model: Access,
            attributes: ['access_type']
          }]
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name']
        // include: [{
        //     model: Diagnosis,
        //     attributes: ['dx_code', 'dx_name'],
        //     through: {
        //       model: IsDiagnosed,
        //       attributes: ['dx_date']
        //     }
        //   }]
      }
      // {
      //   model: Procedure,
      //   attributes: ['procedure_name', 'duration'],
      //   through: {
      //     model: Treatment,
      //     attributes: ['tx_date'],
      //     include: [{
      //         model: Form,
      //         attributes: ['form_name'],
      //         through: {
      //           model: Record,
      //           attributes: ['record_date']
      //         }
      //       }]
      //   }
      // }
    ]
  })
  .then(dbRelationData => {
    if (!dbRelationData) {
      res.status(404).json({ message: 'No relation found' });
      return;
    }
    res.json(dbRelationData)
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
  Relation.update(req.body, {
    where: {
      relation_id: req.params.id
    }
  })
  .then(dbRelationData => {
    if (!dbRelationData[0]) {
      res.status(404).json({ message: 'No relation found' });
      return;
    }
    res.json(dbRelationData);
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
  Relation.destroy({
    where: {
      relation_id: req.params.id
    }
  })
  .then(dbRelationData => {
    if (!dbRelationData) {
      res.status(404).json({ message: 'No relation found' });
      return;
    }
    res.json(dbRelationData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;