const router = require('express').Router();
const { User } = require('../models')
// const passport = require('passport')
//     , LocalStrategy = require('passport-local').Strategy;
// router.post('/login', (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then(user => {
//         if (!user) {
//             res.status(400).json({
//                 message: 'no user found'
//             })
//         }
//         res.render('users')
//         // check if the user's password is valid assign it to a variable
//         // if the pw is wrong, send a 400 error
//         // save the session or token
//         // tell the user they are logged in
//     })
// })

router.get('/', (req, res) => res.render('homepage'));

router.get('/login', (req, res) => res.render('login'));

module.exports = router;