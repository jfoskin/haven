require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT


app.get('/',(req,res)=>{
    res.send(`Welcome to my drop of hope on the World Wide Web`)
})

app.listen(PORT,()=>{
    console.log(`your server is listening on ${PORT}`)
})