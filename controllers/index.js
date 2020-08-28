const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./feUserRoutes');
const documentRoutes = require('./feDocumentRoutes');
const homeRoutes = require('./homeRoutes');
const procedureRoutes = require('./feProcedureRoutes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/documents', documentRoutes);
router.use('/', homeRoutes);
router.use('/documents', procedureRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;