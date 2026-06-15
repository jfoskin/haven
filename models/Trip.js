const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    country: String,
    season: String,
    
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip