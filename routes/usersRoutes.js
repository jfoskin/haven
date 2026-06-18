//Dependencies 

const express = require('express')
const usersRoutes = express.Router()

const User = require('../models/UserModel')

//Routes

// usersRoutes.get('/api/user', (req, res) => {
//     console.log(`hey`)

//     res.send('booooooo')
// })
usersRoutes.get('/api/user/:username', async (req, res) => {

    const specificUser = await User.findOne({ 'username': req.params.username }).then(foundUser => {
        console.log(`Got the user we were looking for ${foundUser}`)
    }).catch(error => {
        console.log(error, `Error getting the user we are looking for!`)
    })

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

usersRoutes.patch('/api/user/:id', async (req, res) => {

    const options = { returnDocument: after }

    const response = await User.findByIdAndUpdate(req.params.id, req.body, options)

    res.send('updated the user')
});

usersRoutes.delete('/api/user/:id', (req, res) => {
    const removed = User.findByIdAndDelete(req.params.id)
})

// usersRoutes.post('/api/users', (req, res) => {
//     console.log(`hey yall don't stop`)
// })

module.exports = usersRoutes;