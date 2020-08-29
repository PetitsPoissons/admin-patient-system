const router = require('express').Router();
const { User } = require('../models')

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

// render single-user template
router.get('/user/:id', (req, res) => {
  User.findOne({
    where: {
      user_id: req.params.id
    },
    attributes: ['user_id', 'first_name', 'last_name', 'username', 'password', 'street_address', 'city', 'state', 'zip', 'active']
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    // serialize the data
    const user = dbUserData.get({ plain: true });
    // pass data to template
    res.render('single-user', { user });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;