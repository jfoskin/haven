//Dependacies

require('dotenv').config()
const express = require('express')
const axios = require('axios')
const countriesClient = require('./api/countriesClient')

const app = express()
const PORT = process.env.PORT


//Import routes
const countriesRoutes = require('./routes/countriesRoutes')


//Middleware

countriesClient.interceptors.request.use(config =>{
console.log(`sending headers hopefully`)

    return config
},
 error => {
  // Handle request error
  return Promise.reject(error);
})

//Routes
 
app.get('/',(req,res)=>{
    res.send(`Welcome to my drop of hope on the World Wide Web`)
})

app.get('/about',(req,res)=>{
    res.send(`This project started with passion for looking at our ever changing world and wanting to contribute a peace of hope but awareness to people as they traverse this beautiful earth we have been given. It was also important for me to highlight the different cultures and cultural norms you could face. I don't believe that we are all meant to be the same person but I believe in the basic principal of respect and that is for all marginaled people. So my solution was to create a space that allowed for information and community to be fostered so we can feel safe no matter where we go on this earth that was gifted to ALL species`)
})

app.use('/', countriesRoutes)

//Ports

app.listen(PORT,()=>{
    console.log(`your server is listening on ${PORT}`)
})