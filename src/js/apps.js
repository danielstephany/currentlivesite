
var main = function() {
	$(".toggle").click(function() {
		$("#nav-display").slideToggle( "slow" );
		$("#menuToggle").toggle();
		$("#closeToggle").toggle();
	});
	if ($(window).width() <= 600){	
		$(window).scroll(function(){
			$("#nav-display").hide("slow");
			$("#closeToggle").hide();
			$("#menuToggle").show();
		});
	}

	if($(window).width() >= 900) {
		$(window).scroll(function(){
			var scrollP = $(this).scrollTop();
			if (scrollP < 850) {
			$('.daniel').css({
		    transform: 'translate(0, -' + scrollP / 33 + '%)'
			});
			$('.bike').css({
		    transform: 'translate(0, -' + scrollP / 38 + '%)'
			});
			$('.home-content').css({
		    transform: 'translate(0, ' + scrollP / 2 + '%)'
			});
		};
		});
	};


};

$("document").ready(main);



'use strict'

var mainApp = angular.module('mainApp', ['ngRoute', 'projectCtrl']);


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


mainApp.run(['$rootScope', '$location', '$anchorScroll', '$routeParams', function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.go);
    $anchorScroll();  
  });
}]);

var projectCtrl = angular.module('projectCtrl', []);

projectCtrl.controller('listCtrl', ['$scope', '$http', function($scope, $http) {
	  	$http.get("mock/projects.json").success(function(data) {
	  	$scope.data = data;
  	})
	  	.error(function() {
                console.log('problem with listCtrl git');
            });
    }]);

projectCtrl.controller('projectCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	  	$http.get("mock/projects/" + $routeParams.projectId + ".json").success(function(data) {
	  	$scope.data = data;
  	})
		.error(function() {
    	        console.log('problem with project controller git');
           });
    }]);
