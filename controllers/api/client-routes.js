const router = require('express').Router();
const { Client, Relation } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Client.create(req.body)
  .then(dbClientData => {
    console.log('dbClientData.client_id***********', dbClientData.client_id);
    console.log('req.session.user_id***********', req.session.user_id);
    Relation.create({
      user_id: req.session.user_id,
      client_id: dbClientData.client_id
    })
    .then(dbRelationData => res.json(dbRelationData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Client.findAll({
    //attributes: { exclude: ['password'] }
  })
    .then(dbClientData => res.json(dbClientData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Client.findOne({
    where: {
      client_id: req.params.id
    }
  })
  .then(dbClientData => {
    if (!dbClientData) {
      res.status(404).json({ message: 'No client found' });
      return;
    }
    res.json(dbClientData);
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
  Client.update(req.body, {
    where: {
      client_id: req.params.id
    }
  })
  .then(dbClientData => {
    console.log(dbClientData);
    if (!dbClientData[0]) {
      res.status(404).json({ message: 'No client found' });
      return;
    }
    res.json(dbClientData);
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
  Client.destroy({
    where: {
      client_id: req.params.id
    }
  })
  .then(dbClientData => {
    if (!dbClientData) {
      res.status(404).json({ message: 'No client found '});
      return;
    }
    res.json(dbClientData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;