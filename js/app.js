var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', { templateUrl: 'partials/home.html', controller: 'HomeController'}).
      when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'}).
      when('/pong', {templateUrl: 'partials/pong/pong.html', controller: 'ProjectsController'}).
      when('/15-puzzle', {templateUrl: 'partials/15-puzzle/15-puzzle.html', controller: 'ProjectsController'}).
      otherwise({
        redirectTo: '/home'
      });
  }
]);

app.factory('projectsFactory', function(){
  var factory = {};
  factory.test = function() {
    console.log('factory test');
  };
  return factory;
});

app.controller('NavController', function($scope, $location){
	$scope.isActive = function(path) {
    if($location.path() === path) {
      return true;
    }
    return false;
  }
})

app.controller('HomeController', function(){
	
});

app.controller('ProjectsController',function(projectsFactory){
  projectsFactory.test();
});