const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const accessRoutes = require('./access-routes.js');

router.use('/users', userRoutes);
router.use('/access', accessRoutes);

module.exports = router;