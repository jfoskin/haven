const mongoose, { Schema } = require('mongoose')


const countrySchema = new Schema({
    countryName: String
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country;
