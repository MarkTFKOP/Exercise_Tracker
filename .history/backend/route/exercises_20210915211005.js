const router = require('express').Router
const Exercise = require('../models/exercise.model')

router.route('/').get((res , req)=>{
    Exercise.find().then(users => res.json(users)).catch(err => res.status(400).json('Error : ' + err ))
})