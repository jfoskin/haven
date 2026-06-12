require('dotenv').config()

const axios = require('axios')
const BASEURL = process.env.BASEURL
const APIKEY = process.env.APIKEY


const countriesClient = axios.create({
    baseURL: BASEURL,
    headers:{ 'Authorization': APIKEY}
})

module.exports = countriesClient



