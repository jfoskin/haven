//Dependacies

const express = require('express')
const countriesClient = require('../api/countriesClient')

const  countriesRoutes = express.Router()

//get all countries route
countriesRoutes.get('/api/countries', async (req, res)=>{

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

});

// countriesRoutes.get('/api/countries', async (req, res)=>{

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

// });

module.exports = countriesRoutes;