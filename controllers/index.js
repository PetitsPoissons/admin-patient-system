const router = require('express').Router();

const apiRoutes = require('./api');

const startRoutes = require('./feStartRoutes');
const userRoutes = require('./feUserRoutes');
const formRoutes = require('./feFormRoutes');
const procedureRoutes = require('./feProcedureRoutes');
const diagnosisRoutes = require('./feDiagnosisRoutes');
const clientRoutes = require('./feClientRoutes');
const dashboardRoutes = require('./feDashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', startRoutes);
router.use('/users', userRoutes);
router.use('/forms', formRoutes);
router.use('/procedures', procedureRoutes);
router.use('/diagnosis', diagnosisRoutes);
router.use('/clients', clientRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;