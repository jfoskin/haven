//Dependacies

const express = require('express')
const usersRoutes = express.Router()

//Routes

usersRoutes.get('/api/users', (req,res)=>{
    console.log(`hey`)

    res.send('booooooo')
})
usersRoutes.get('/api/user/:id', async (req,res)=>{
    console.log(` user routes hit`)
    res.send(`users routes are here`)
})

usersRoutes.post('/api/users', (req,res)=>{
    console.log(`hey yall don't stop`)
})

module.exports = usersRoutes;