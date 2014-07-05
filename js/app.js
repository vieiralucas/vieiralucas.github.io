var app = angular.module('app', ['ngRoute', 'firebase']);

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

app.controller('NavController', ['$scope', '$location', function($scope, $location) {
  $scope.isHomeActive = function() {
    if($location.path() === '/home') {
      return true;
    }
    return false;
  }
}]);

app.controller('HomeController', ['$scope', function($scope) {
	
}]);

app.controller('ProjectsController', ['$scope', '$firebase', function($scope, $firebase) {
  var projectsRef = new Firebase('https://vieiralucas.firebaseio.com/projects');
  $scope.projects = $firebase(projectsRef);
  console.log($scope.projects);
}]);