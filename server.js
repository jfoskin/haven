require('dotenv').config()
const express = require('express')
const axios = require('axios')
 const countriesClient = require('./countriesClient')

const app = express()
const PORT = process.env.PORT



countriesClient.interceptors.request.use(config =>{
console.log(`sending headers hopefully`)

    return config
},
 error => {
  // Handle request error
  return Promise.reject(error);
})


app.get('/',(req,res)=>{
    res.send(`Welcome to my drop of hope on the World Wide Web`)
})

app.get('/about',(req,res)=>{
    res.send(`This project started with passion for looking at our ever changing world and wanting to contribute a peace of hope but awareness to people as they traverse this beautiful earth we have been given. It was also important for me to highlight the different cultures and cultural norms you could face. I don't believe that we are all meant to be the same person but I believe in the basic principal of respect and that is for all marginaled people. So my solution was to create a space that allowed for information and community to be fostered so we can feel safe no matter where we go on this earth that was gifted to ALL species`)
})


//get all countries route
app.get('/api/countries', async (req, res)=>{

    try {
     

        // let response = await countriesClient.get(`https://api.restcountries.com/countries/v5?&limit=3`)
     

        res.json(response.data)

        // const transformedCountriesData = data.data.objects.map(country => ({
        //     name: country.names.common,
        //     population: country.population
        // }))

        // res.json(transformedCountriesData)

    } catch (error) {
        console.error('Error fetching or transforming users:', error);
        res.status(500).send(`Countries not found`)
    }

})

// app.get('/api/countries', async (req, res)=>{

//     try {

//         const countryName = req.query.q || 'nothing'

//         // let apiResponse = await fetch(
//         //     `https://api.restcountries.com/countries/v5?q=${countryName}&limit=5`,
//         //     {headers: { 'Authorization': APIKEY }}
//         // )

//         if(!apiResponse.ok){
//             throw new Error(`apiResponse was not ok ${apiResponse.status}`)
//         }

//         const data = await apiResponse.json()
//         console.log(data)

//         // const transformedCountriesData = data.data.objects.map(country => ({
//         //     id: country.uuid,
//         //     name: country.names.common,
//         //     population: country.population
//         // }))

//         res.json(data)

//     } catch (error) {
//         console.error('Error fetching or transforming users:', error);
//         res.status(500).send(`Countries not found`)
//     }

// })

app.listen(PORT,()=>{
    console.log(`your server is listening on ${PORT}`)
})