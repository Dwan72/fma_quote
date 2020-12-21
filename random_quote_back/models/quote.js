var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema(
    {
        quote_id: {type: Number, required: true},
        quote: {type: String, required: true},
        author: {type: String}
    }
)

QuoteSchema.virtual('url').get(function() {
    return '/catalog/author/' + this_id;
});



module.exports = mongoose.model('Quote', QuoteSchema);