//Dependacies

const express = require('express')
const usersRoutes = express.Router()

const User = require('../models/UserModel')

//Routes

usersRoutes.get('/api/users', (req, res) => {
    console.log(`hey`)

    res.send('booooooo')
})
usersRoutes.get('/api/user/:id', async (req, res) => {
    console.log(` user routes hit`)
    res.send(`users routes are here`)
})
usersRoutes.post('/api/user/', async (req, res) => {

    User.create(req.body).then(createdUser => {
        console.log(`User ${createdUser.username} was created`)
    })

    res.send(req.body)
})

usersRoutes.post('/api/users', (req, res) => {
    console.log(`hey yall don't stop`)
})

module.exports = usersRoutes;