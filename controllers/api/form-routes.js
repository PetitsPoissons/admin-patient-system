const router = require('express').Router();
const { Form } = require('../../models');

/******************/
/***** CREATE *****/
/******************/

router.post('/', (req, res) => {
  Form.create(req.body)
  .then(dbFormData => res.json(dbFormData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/******************/
/****** READ ******/
/******************/

router.get('/', (req, res) => {
  Form.findAll()
    .then(dbFormData => res.json(dbFormData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Form.findOne({
    where: {
      form_id: req.params.id
    }
  })
    .then(dbFormData => {
      if (!dbFormData) {
        res.status(404).json({ message: 'This form was not found' });
        return;
      }
      res.json(dbFormData);
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
  Form.update(req.body, {
    where: {
      form_id: req.params.id
    }
  })
  .then(dbFormData => {
    if (!dbFormData[0]) {
      res.status(404).json({ message: 'This form was not found' });
      return;
    }
    res.json(dbFormData);
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
  Form.destroy({
    where: {
      form_id: req.params.id
    }
  })
  .then(dbFormData => {
    if (!dbFormData) {
      res.status(404).json({ message: 'This form was not found' });
      return;
    }
    res.json(dbFormData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;