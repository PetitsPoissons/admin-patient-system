const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./fe-user-routes');
const documentRoutes = require('./fe-document-routes');
const homeRoutes = require('./home-routes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/documents', documentRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;