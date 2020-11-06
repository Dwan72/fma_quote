var async = require('async')

var stack = []


var functionOne = function(callback) {
    callback(null, "first function result");
}

var functionTwo = function(callback) {
    callback(null, "second function result");
}

var functionThree = function(callback) {
    callback(null, "third function result");
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);


async.parallel(stack, function(err, result){
    console.log(result);
});