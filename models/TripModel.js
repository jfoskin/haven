const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    country: String,
    season: String,
    body: String,
    comments: [{ body: String, date: Date }],

})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip