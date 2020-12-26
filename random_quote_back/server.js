//requiring express, bodyparser, and cors
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;
const quoteRouter = express.Router();
let MongoClient = require('mongodb').MongoClient;
let Quote = require('./schemas/quote.model');


app.use(cors());
app.use(bodyParser.json());
app.use('/quotes', quoteRouter)


//start up mongoose connection
let url = "mongodb+srv://alean:Eureka3%23@fmacluster.mqx2m.mongodb.net/test?authSource=admin&replicaSet=atlas-j2tzsx-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
mongoose.connect( url, { useNewUrlParser: true });
const connection = mongoose.connection;

//display confirmation that connection was established successfully
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



quoteRouter.route('/').get(function(req, res){ 

    Quote.find(function(err, quotes) {
        if(err) {
            console.log(err)
        } else {
            res.send(req.params)
        }
    })
})

quoteRouter.route('/:id').get(function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("fma");
        dbo.collection("quotes").findOne({
            quote_id: req.params.id
        },
        function(err, result) {
            if (err) throw err;
            else{
                res.json(result);
                db.close()
            }
        });
    });

});




//have app listen on port 4000
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});





