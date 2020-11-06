var express = require('express');
var router = express.Router();



//requiring quote controller
var quote_controller = require('../controllers/quoteController');


// GET REQUEST FOR quoteController's root page. 
router.get('/', quote_controller.index);




module.exports = router;
