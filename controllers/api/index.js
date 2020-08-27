const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const accessRoutes = require('./access-routes.js');
const clientRoutes = require('./client-routes.js');
const procedureRoutes = require('./procedure-routes.js');
// const interventionRoutes = require('./intervention-routes.js');


router.use('/users', userRoutes);
router.use('/access', accessRoutes);
router.use('/clients', clientRoutes);
router.use('/procedures', procedureRoutes);

// router.use('/interventions', interventionRoutes);


module.exports = router;