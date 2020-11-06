var async = require('async')
var Quote = require('./models/quote')
var mongoose = require('mongoose');


// console.log('This script populates fma quotes to database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');
// var userArgs = process.argv.slice(2);

// if (!userArgs[0].startsWidth('mongodb')) {
//     console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
//     return
// }


// var mongoDB = userArgs[0];
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// var db = mongoose.connection;


var quotes = []

function quoteCreate(quote_id, quote, author) {
    quoteDetail = {
        quote_id: quote_id,
        quote: quote,
        author: author
    }
    var quote = new Quote(quoteDetail);
    quotes.push(quote)
    // quote.save(function (err) {
    //     if (err) {
    //         cb(err, null)
    //         return
    //     }
    //     console.log('New quote: ' + quote);
    //     quotes.push(quote)
    //     cb(null, book)
    // });
}

quoteCreate(1, "hello world", "someAuthor") 

