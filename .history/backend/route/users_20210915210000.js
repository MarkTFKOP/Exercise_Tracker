const router  = require('express').Router;
let User = require('../models/user.model')

router.route('/').get((res , req)  => {
    User.find()
    .then(users => res.json(users))
    .catch();
})