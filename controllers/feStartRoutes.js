const router = require('express').Router();

// render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// render register page
router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('register');
});

// render homepage
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('homepage');
  }
  else {
    res.render('login');
  }
});

module.exports = router;