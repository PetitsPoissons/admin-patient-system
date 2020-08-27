const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// display all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: ['first_name', 'last_name', 'email', 'primary_phone']
  })
  .then(dbUserData => {
    const users = dbUserData.map(user => user.get({ plain: true }));
    res.render('users', { users });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;