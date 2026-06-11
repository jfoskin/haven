require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const APIKEY = process.env.APIKEY


app.get('/',(req,res)=>{
    res.send(`Welcome to my drop of hope on the World Wide Web`)
})

app.get('/about',(req,res)=>{
    res.send(`This project started with passion for looking at our ever changing world and wanting to contribute a peace of hope but awareness to people as they traverse this beautiful earth we have been given. It was also important for me to highlight the different cultures and cultural norms you could face. I don't believe that we are all meant to be the same person but I believe in the basic principal of respect and that is for all marginaled people. So my solution was to create a space that allowed for information and community to be fostered so we can feel safe no matter where we go on this earth that was gifted to ALL species`)
})

app.get('/api/countries', async (req, res)=>{

    try {
        // let apiResponse = await fetch(
        //     'https://api.restcountries.com/countries/v5?&limit=3',
        //     {headers: { 'Authorization': APIKEY }}
        // )

        if(!apiResponse.ok){
            throw new Error(`apiResponse was not ok ${apiResponse.status}`)
        }

        const data = await apiResponse.json()
        console.log(data)
        const transformedData = data.data.objects.map(country => ({
            name: country.names.common,
            population: country.population
        }))

        res.json(transformedData)

    } catch (error) {
        console.error('Error fetching or transforming users:', error);
        res.status(500).send(`Countries not found`)
    }

})

app.listen(PORT,()=>{
    console.log(`your server is listening on ${PORT}`)
})