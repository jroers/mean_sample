var mongoose = require("mongoose");

var TodoSchema = new mongoose.Schema({
	name: String,
	due_date: String,
	description: String
});

var Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;