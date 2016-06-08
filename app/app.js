"use strict";

let NotDolls = angular.module('NotDolls', [
	'ngRoute'
]);

NotDolls.config(['$routeProvider', 
  function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/create', {
			templateUrl: 'partials/newFigurine.html',
			controller: 'NewFigurineController'
		})
		.otherwise('/');
  }
]);