const router = require('express').Router
const Exercise = require('../models/exercise.model')

router.route('/').get((res , req)=>{
    Exercise.find().then(users => res.json(users)).catch(err => res.status(400).json('Error : ' + err ))
})


router.post('./add').post((res , req) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration
    const date = Date.parse(req.body.date)

    const newExercise = new User({
        username,
        description,
        duration,
        date
    })

    Exercise.save().then(() => res.json('Exercise has been added')).catch(err => res.status(400).json('Error : ' + err));

})

