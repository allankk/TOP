// require mongoose
var mongoose = require('mongoose');

// Define a Schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
})