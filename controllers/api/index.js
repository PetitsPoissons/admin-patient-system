const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const accessRoutes = require('./access-routes.js');
const clientRoutes = require('./client-routes.js');
const relationRoutes = require('./relation-routes.js');
const procedureRoutes = require('./procedure-routes.js');
const txRoutes = require('./treatment-routes.js');
const formRoutes = require('./form-routes.js');
const recordRoutes = require('./record-routes.js');
const diagnosisRoutes = require('./diagnosis-routes.js');
const isDiagnosedRoutes = require('./isdiagnosed-routes.js');

router.use('/users', userRoutes);
router.use('/access', accessRoutes);
router.use('/clients', clientRoutes);
router.use('/relations', relationRoutes);
router.use('/procedures', procedureRoutes);
router.use('/tx', txRoutes);
router.use('/forms', formRoutes);
router.use('/records', recordRoutes);
router.use('/dx', diagnosisRoutes);
router.use('/dxed', isDiagnosedRoutes);

module.exports = router;