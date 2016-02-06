'use strict'

var mainApp = angular.module('mainApp', ['ngRoute']);


mainApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
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