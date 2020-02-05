const express       = require('express');
const router        = express.Router();
const User          = require('../models/user');


router.post('/reg',         (req, res) => {
    let newUser = new User({
        name:       req.body.name,
        email:      req.body.email,
        login:      req.body.login,
        password:   req.body.password
    });
    User.addUser(newUser, (err, user) => {
        err
            ? res.json({success: false, msg: 'User is not added'})
            : res.json({success: true, msg: 'User is added'})
    })
});
router.get('/auth',        (req, res) => res.send('Login'));
router.get('/dashboard',   (req, res) => res.send('Dashboard'));


module.exports = router;