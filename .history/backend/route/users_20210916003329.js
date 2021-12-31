const router  = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((res , req)  => {
    User.find()
    .then(users => res.json(users))
    .catch();
})

router.route('/add').post((res , req) => {
    const Username = req.body.username;

    const newUser = new User({Username})
    newUser.save().then(() => res.json("saved")).catch(err => res.status(400).json('Error:' + err))
})  
module.exports = router