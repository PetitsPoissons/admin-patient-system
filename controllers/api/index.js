const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const accessRoutes = require('./access-routes.js');
const clientRoutes = require('./client-routes.js');
const procedureRoutes = require('./procedure-routes.js');
const documentRoutes = require('./document-routes.js');
const recordRoutes = require('./record-routes.js');
const diagnosisRoutes = require('./diagnosisroutes.js');


router.use('/users', userRoutes);
router.use('/access', accessRoutes);
router.use('/clients', clientRoutes);
router.use('/procedures', procedureRoutes);
router.use('/documents', documentRoutes);
router.use('/records', recordRoutes);
router.use('/diagnosis', diagnosisRoutes);


module.exports = router;