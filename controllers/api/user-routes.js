const router = require('express').Router();
const { User, Access, Client, Relation } = require('../../models');
const sequelize = require('../../config/connection');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  User.create(req.body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    },
    include: {
      model: Access,
      attribute: ['access_id']
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user found with that username' });
      return;
    }
    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    // create session and send response back
    req.session.save(() => {
      req.session.user_id = dbUserData.user_id;
      req.session.username = dbUserData.username;
      req.session.access_id = dbUserData.access.access_id;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => res.status(204).end());
  } else {
    res.status(404).end();
  }
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  User.findAll({
    attributes: [
      'user_id', 'username', 'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', 'dob', 'ssn', 'active', 'license_expiration',[sequelize.literal(
        '(SELECT COUNT(DISTINCT relation.client_id) FROM relation WHERE user.user_id = relation.user_id)'
      ), 'clients_nb']
    ],
    order: ['last_name'],
    include: [
      {
        model: Access,
        attributes: ['access_id', 'access_type']
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name', 'primary_phone', 'alt_phone', 'email'],
        through: {
          model: Relation,
          attributes: ['start_date', 'end_date']
        }
      }
    ]
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      user_id: req.params.id
    },
    attributes: [
      'user_id', 'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
        '(SELECT COUNT(DISTINCT relation.client_id) FROM relation WHERE user.user_id = relation.user_id)'
      ), 'clients_nb']
    ],
    include: [
      {
        model: Access,
        attributes: ['access_id', 'access_type']
      },
      {
        model: Client,
        attributes: ['first_name', 'last_name', 'primary_phone', 'alt_phone', 'email'],
        through: {
          model: Relation,
          attributes: ['start_date', 'end_date']
        }
      }
    ]
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/***** UPDATE *****/
/******************/

router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      user_id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/register', (req, res) => {
  // update user with username and password provided
  User.update(req.body, {
    individualHooks: true,
    where: {
      email: req.body.email
    },
    //attributes: ['user_id'],
    // include: {
    //   model: Access,
    //   attribute: ['access_id']
    // }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: "You are not an authorized user. Please contact Shrinko's administrator to set up your account." });
      return;
    }
    // create session and send response back
    const registeredUser = dbUserData[1][0].get({ plain: true });
    req.session.save(() => {
      req.session.user_id = registeredUser.user_id;
      req.session.username = registeredUser.username;
      req.session.access_id = registeredUser.access_id;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'Welcome to Shrinko EMHR system. You are now registered and logged in!' });
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/***** DELETE *****/
/******************/

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      user_id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;