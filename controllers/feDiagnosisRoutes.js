const router = require('express').Router();
const sequelize = require('../config/connection');
const { Diagnosis } = require('../models');

//display all Diagnosis
router.get('/', (req, res) => {
      Diagnosis.findAll({
        attributes: ['dx_name', 'dx_code', 'dx_desc']
    })
    .then(dbDiagnosisData => {
        const diagnosis = dbDiagnosisData.map(diagnosis => diagnosis.get({ plain: true }));
    res.render('diagnosis', { diagnosis });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



module.exports = router;