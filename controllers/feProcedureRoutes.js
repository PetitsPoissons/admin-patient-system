const router = require('express').Router();
const sequelize = require('../config/connection');
const { Procedure } = require('../models');

//display all procedures
router.get('/', (req, res) => {
    Procedure.findAll({
        attributes: ['procedure_name', 'procedure_desc', 'cpt_code', 'duration']
    })
    .then(dbProcedureData => {
        const procedures = dbProcedureData.map(procedure => procedure.get({ plain: true }));
    res.render('procedures', { procedures });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});



module.exports = router;