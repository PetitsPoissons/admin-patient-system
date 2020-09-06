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
    let loggedIn = true;
    let super_access = false;
    let admin_access = false;
    let shrink_access = false;
    let basic_access = false;
    let biller_access = false;
    // check user's access type
    switch(req.session.access_id) {
      case 1:
        super_access = true;
        break;
      case 2:
        admin_access = true;
        break;
      case 3:
        shrink_access = true;
        break;
      case 4:
        basic_access = true;
        break;
      case 5:
        biller_access = true;
        break;
    }
    res.redirect('/', { super_access, admin_access, shrink_access, basic_access, biller_access, loggedIn });
    return;
  }
  res.render('register');
});

// render homepage
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    let loggedIn = true;
    let super_access = false;
    let admin_access = false;
    let shrink_access = false;
    let basic_access = false;
    let biller_access = false;
    // check user's access type
    switch(req.session.access_id) {
      case 1:
        super_access = true;
        break;
      case 2:
        admin_access = true;
        break;
      case 3:
        shrink_access = true;
        break;
      case 4:
        basic_access = true;
        break;
      case 5:
        biller_access = true;
        break;
    }
    res.render('homepage', { super_access, admin_access, shrink_access, basic_access, biller_access, loggedIn });
  }
  else {
    res.render('login');
  }
});

module.exports = router;