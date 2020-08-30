const router = require('express').Router();

const apiRoutes = require('./api');

const startRoutes = require('./fe-start-routes');
const userRoutes = require('./fe-user-routes');
const formRoutes = require('./fe-form-routes');
const procedureRoutes = require('./ProcedureRoutes');
const diagnosisRoutes = require('./DiagnosisRoutes');

router.use('/api', apiRoutes);
router.use('/', startRoutes);
router.use('/users', userRoutes);
router.use('/procedures', procedureRoutes);
router.use('/diagnosis', diagnosisRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;