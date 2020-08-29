const router = require('express').Router();
const { User, Access, Client, Record } = require('../../models');
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
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  console.log('inside API/USERS/LOGOUT');
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
      'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
        '(SELECT COUNT(DISTINCT record.client_id) FROM record WHERE user.user_id = record.user_id)'
      ), 'clients_nb']
    ],
    order: ['last_name'],
    exclude: ['password'],
    include: [
      {
        model: Access,
        attributes: ['access_id', 'access_type']
      },
      {
        model: Client,
        attributes: [
          'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
          '(SELECT COUNT(*) FROM record WHERE clients.client_id = record.client_id)'
          ), 'records_nb']
        ],
        through: {
          model: Record,
          attributes: ['date']
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
attributes: {
  include: [
    [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
  ]
}

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: {
      include: [
        'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
          '(SELECT COUNT(DISTINCT record.client_id) FROM record WHERE user.user_id = record.user_id)'
        ), 'clients_nb']
      ],
      exclude: ['password']
    },
    where: {
      user_id: req.params.id
    },
    include: [
      {
        model: Access,
        attributes: ['access_id', 'access_type']
      },
      {
        model: Client,
        attributes: [
          'first_name', 'last_name', 'primary_phone', 'alt_phone', 'email', [sequelize.literal(
          '(SELECT COUNT(*) FROM record WHERE clients.client_id = record.client_id)'
          ), 'records_nb']
        ],
        through: {
          model: Record,
          attributes: ['date']
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