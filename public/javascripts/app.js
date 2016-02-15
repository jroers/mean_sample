angular.module('sampleApp', ['ui.router', 'ngResource'])
	.controller('HomeController', HomeController)
	.factory('Todo', TodoFactory)
	// .service('Todo', TodoFactory)
	.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
	console.log('config');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'HomeController',
			controllerAs: 'home',
			templateUrl: '/templates/home.html'
		});
}

// Controllers
HomeController.$inject(["TodoFactory"]);
function HomeController(TodoFactory) {
	console.log("HomeController is working!");
	var vm = this;
	vm.homeTest = "Welcome to the homepage!";
	vm.newTodo = {};
	vm.todos = TodoFactory.query();
}

// $resource TodoFactory

function TodoFactory() {
	console.log("TodoFactory is working!");
	var todos = {};

	todos.query = function() {
		return todoList;
	};

	todos.get = get;

  function get(id) {
    var id = parseInt(id);
    return todoList.find(function(todo) {
      return todo.id == id;
    });
 	}
}

// function TodoFactory($resource) {
//   return $resource('/api/todos/:id', { id: '@_id' }, {
//     update: {
//       method: 'PUT' // this method issues a PUT request
//     },
//     query: {
//       isArray: true,
//       transformResponse: function(data) {
//           return angular.fromJson(data);
//       }
//     }
//   });
// }

// SEED DATA
var todoList = [
	{
		"id": 1,
		name: "Feed the cats",
		description: "1 scoop of food from the container divided equally for each cat. Though Bun will eat more.",
		due_date: "2/13/2016"
	},{
		"id": 2,
		"name": "Water the plants",
		"description": "Make it rain, yo.",
		"due_date": "2/13/2016"
	},{
		"id": 3,
		"name": "Clean the litter box",
		"description": "So much poop and pee.",
		"due_date": "2/12/2016"
	},{
		"id": 4,
		"name": "Don't yell at Sean",
		"description": "So help me God, just don't do it.",
		"due_date": "2/14/2016"
	}
];