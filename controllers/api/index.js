const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const accessRoutes = require('./access-routes.js');
// const interventionRoutes = require('./intervention-routes.js');
// const clientRoutes = require('./client-routes.js');

router.use('/users', userRoutes);
router.use('/access', accessRoutes);
// router.use('/interventions', interventionRoutes);
// router.use('/clients', clientRoutes);

module.exports = router;