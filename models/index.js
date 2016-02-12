// This is where I'll reference the models I'm using

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_sample');

module.exports.Todo = require("./todo.js");