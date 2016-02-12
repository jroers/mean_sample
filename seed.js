var db = require("./models");

var todoList = [
	{
		name: "Feed the cats",
		description: "1 scoop of food from the container divided equally for each cat. Though Bun will eat more.",
		due_date: "2/13/2016"
	},{
		name: "Water the plants",
		description: "Make it rain, yo.",
		due_date: "2/13/2016"
	},{
		name: "Clean the litter box",
		description: "So much poop and pee.",
		due_date: "2/12/2016"
	},{
		name: "Don't yell at Sean",
		description: "So help me God, just don't do it.",
		due_date: "2/14/2016"
	}
];

db.Todo.remove({}, function (err, success) {
	db.Todo.create(todoList, function(err, todos) {
		console.log("All todos", todos);
		console.log("Created", todos.length, "todos.");
		process.exit();
	});
});
