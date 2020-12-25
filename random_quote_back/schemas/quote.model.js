const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Quote = new Schema({
    id: {
        type: Number
    },
    author: {
        type: String
    },
    quote: {
        type: String
    } 
})

module.exports = mongoose.model('Quote', Quote);