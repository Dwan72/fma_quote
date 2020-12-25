//requiring express, bodyparser, and cors
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
//import Quote from './schemas/quote.model.js';

app.use(cors());
app.use(bodyParser.json());


//start up mongoose connection
mongoose.connect('mongodb+srv://alean:Eureka3%23@fmacluster.mqx2m.mongodb.net/test?authSource=admin&replicaSet=atlas-j2tzsx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true });
const connection = mongoose.connection;

//display confirmation that connection was established successfully
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//have app listen on port 4000
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


//creating Express Router, then adding it to the middleware stack
const quoteRouter = express.Router();
app.use('/quotes', quoteRouter)
let Quote = require('./schemas/quote.model');


quoteRouter.route('/').get(function(req, res){ 
    Quote.find(function(err, quotes) {
        if(err) {
            console.log(err)
        } else {
            res.json(quotes)
        }
    })
})

quoteRouter.route('/:id').get(function(req, res) {
    let id = req.paramas.id;
    Quote.findById(id, function(err, todo) {
        res.json(todo)
    });
});

quoteRouter.route('/')