const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSChema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('user', userSChema)