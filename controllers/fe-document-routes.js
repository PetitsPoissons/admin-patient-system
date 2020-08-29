const router = require('express').Router();
const sequelize = require('../config/connection');
const { Document } = require('../models');

// display all documents
router.get('/', (req, res) => {
  Document.findAll({
    attributes: ['document_name', 'document_desc']
  })
  .then(dbDocumentData => {
    const documents = dbDocumentData.map(document => document.get({ plain: true }));
    res.render('documents', { documents });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;