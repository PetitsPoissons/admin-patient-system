const router = require('express').Router();
const { User, Access, Client, Record } = require('../models')
const sequelize = require('../config/connection');

// render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// render homepage
router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage');
});

module.exports = router;