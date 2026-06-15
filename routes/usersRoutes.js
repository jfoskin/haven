//Dependacies

const express = require('express')
const usersRoutes = express.Router()

const User = require('../models/UserModel')

//Routes

usersRoutes.get('/api/users', (req, res) => {
    console.log(`hey`)

    res.send('booooooo')
})
usersRoutes.get('/api/user/:username', async (req, res) => {

    const specificUser = await User.findOne({ 'username': req.params.username })

    console.log(` user routes hit`)
    res.send(`users routes are here`, specificUser)
})


usersRoutes.post('/api/user/', async (req, res) => {

    User.create(req.body).then(createdUser => {
        console.log(`User ${createdUser.username} was created`)
    }).catch(error => {
        console.log(error, `<<<<<<<<===== ERROR HERE HELP!!`)
    })

    res.send(req.body)
})

usersRoutes.post('/api/users', (req, res) => {
    console.log(`hey yall don't stop`)
})

module.exports = usersRoutes;