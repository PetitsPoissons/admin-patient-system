const router = require('express').Router();
const { Document } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Document.create(req.body)
  .then(dbDocumentData => res.json(dbDocumentData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Document.findAll()
    .then(dbDocumentData => res.json(dbDocumentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Document.findOne({
    where: {
      document_id: req.params.id
    }
  })
    .then(dbDocumentData => {
      if (!dbDocumentData) {
        res.status(404).json({ message: 'This document was not found' });
        return;
      }
      res.json(dbDocumentData);
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
  Document.update(req.body, {
    where: {
      document_id: req.params.id
    }
  })
  .then(dbDocumentData => {
    if (!dbDocumentData[0]) {
      res.status(404).json({ message: 'This document was not found' });
      return;
    }
    res.json(dbDocumentData);
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
  Document.destroy({
    where: {
      document_id: req.params.id
    }
  })
  .then(dbDocumentData => {
    if (!dbDocumentData) {
      res.status(404).json({ message: 'This document was not found' });
      return;
    }
    res.json(dbDocumentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;