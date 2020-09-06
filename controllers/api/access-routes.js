const router = require('express').Router();
const { Access } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Access.create(req.body)
  .then(dbAccessData => res.json(dbAccessData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Access.findAll()
    .then(dbAccessData => res.json(dbAccessData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Access.findOne({
    where: {
      access_id: req.params.id
    }
  })
    .then(dbAccessData => {
      if (!dbAccessData) {
        res.status(404).json({ message: 'This access level was not found' });
        return;
      }
      res.json(dbAccessData);
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
  Access.update(req.body, {
    where: {
      access_id: req.params.id
    }
  })
  .then(dbAccessData => {
    if (!dbAccessData[0]) {
      res.status(404).json({ message: 'This access level was not found' });
      return;
    }
    res.json(dbAccessData);
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
  Access.destroy({
    where: {
      access_id: req.params.id
    }
  })
  .then(dbAccessData => {
    if (!dbAccessData) {
      res.status(404).json({ message: 'This access level was not found' });
      return;
    }
    res.json(dbAccessData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
