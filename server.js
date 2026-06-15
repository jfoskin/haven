//Dependacies

require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')
const axios = require('axios')
const app = express()
const mongoose = require('mongoose')

// AUTH
const countriesClient = require('./api/countriesClient')


//Local Variables
const PORT = process.env.PORT || 4469
const uri = process.env.DATABASEURL


//Import routes
const countriesRoutes = require('./routes/countriesRoutes')
const usersRoutes = require('./routes/usersRoutes')


//Database connection
mongoose.connect(uri)

const db = mongoose.connection

db.on('error', (error) => console.log(error.message, `Database has an error`))
db.on('connected', () => console.log(`Database has successfully connected`))
db.on('disconnected', () => console.log(`Database has disconnected`))

//Middleware

app.use(express.urlencoded({ extende: true }))

const client = new MongoClient(uri)

async function mongodbCOnnection() {
    try {
        await client.connect()

        console.log(`Database connection is succesful`)
    } catch (error) {
        console.log(`AN ERROR has OCCURED while trying to connect to MongoDB... an error HAS occured`, error)
    }
}

countriesClient.interceptors.request.use(config => {
    console.log(`sending headers hopefully`)

    return config
},
    error => {
        // Handle request error
        return Promise.reject(error);
    })

//Routes

app.get('/', (req, res) => {
    res.send(`Welcome to my drop of hope on the World Wide Web`)
})

app.get('/about', (req, res) => {
    res.send(`This project started with passion for looking at our ever changing world and wanting to contribute a peace of hope but awareness to people as they traverse this beautiful earth we have been given. It was also important for me to highlight the different cultures and cultural norms you could face. I don't believe that we are all meant to be the same person but I believe in the basic principal of respect and that is for all marginaled people. So my solution was to create a space that allowed for information and community to be fostered so we can feel safe no matter where we go on this earth that was gifted to ALL species`)
})

// app.post('/')

app.use('/', countriesRoutes)
app.use('/', usersRoutes)

//Ports

app.listen(PORT, () => {
    console.log(`your server is listening on ${PORT}`)
    mongodbCOnnection()
})