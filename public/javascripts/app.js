angular.module('sampleApp', ['ui.router'])
	.config(config)
	.controller('HomeController', HomeController);

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

function HomeController() {
	var vm = this;
	vm.homeTest = "Welcome to the homepage!";
}