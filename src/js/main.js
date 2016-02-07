'use strict'

var mainApp = angular.module('mainApp', ['ngRoute']);


mainApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).
		when('/home', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).
		when('/projects', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).
		when('/about', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).
		when('/resume', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).when('/contact', {
			templateUrl: 'partials/project-list.html',
			controller: 'listCtrl'
		}).
		when('/:projectId', {
			templateUrl: 'partials/project.html',
			controller: 'projectCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);


mainApp.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.go);
    $anchorScroll();  
  });
});

mainApp.controller('listCtrl', function($scope, $http) {
	  	$http.get("mock/projects.json").success(function(data) {
	  	$scope.data = data;
  	})
	  	.error(function() {
                console.log('problem with listCtrl git');
            });
    });

mainApp.controller('projectCtrl', function($scope, $http, $routeParams) {
	  	$http.get("mock/projects/" + $routeParams.projectId + ".json").success(function(data) {
	  	$scope.data = data;
  	})
		.error(function() {
    	        console.log('problem with project controller git');
           });
    });
