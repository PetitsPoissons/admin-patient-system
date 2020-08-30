const router = require('express').Router();
const sequelize = require('../config/connection');
const { Form } = require('../models');

// display all documents
router.get('/', (req, res) => {
  Form.findAll({
    attributes: ['form_name', 'form_desc']
  })
  .then(dbFormData => {
    const forms = dbFormData.map(form => form.get({ plain: true }));
    res.render('forms', { forms });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;