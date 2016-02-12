// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

var db = require('./models');

// VIEWS

app.get('*', function(req, res) {
	res.render('index');
});

// END OF VIEWS
// API ENDPOINTS

// app.get('/api/todos', function (req, res) {
// 	Todo.find(function(err, allTodos) {
// 		if (err) { 
// 			res.status(500).json({ error: err.message });
// 		} else {
// 			res.json(allTodos);
// 		}
// 	});
// });

// END OF API ENDPOINTS

// connect to mongodb - Removed 
// mongoose.connect('mongodb://localhost/mean_sample');

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});