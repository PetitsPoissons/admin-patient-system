const router = require('express').Router();
const { Record, User, Client, Procedure, Document } = require('../../models');

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
        model: Procedure,
        attributes: ['procedure_name']
      },
      {
        model: Document,
        attributes: ['document_name']
      }
    ]
  })
  .then(dbRecordData => res.json(dbRecordData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Record.findOne({
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
        model: Procedure,
        attributes: ['procedure_name']
      },
      {
        model: Document,
        attributes: ['document_name']
      }
    ]
  })
  .then(dbRecordData => {
    if (!dbRecordData) {
      res.status(404).json({ message: 'No record found' });
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
      id: req.params.id
    }
  })
  .then(dbRecordData => {
    if (!dbRecordData[0]) {
      res.status(404).json({ message: 'No record found' });
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
      id: req.params.id
    }
  })
  .then(dbRecordData => {
    if (!dbRecordData) {
      res.status(404).json({ message: 'No record found' });
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