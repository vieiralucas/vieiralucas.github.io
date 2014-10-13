var app = angular.module('app', ['ngRoute', 'slick']);

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
  var commits = [];

  $.getJSON('lolcommits.json', function(data) {
    for(var i = 0; i < data.length; i++) {
      for (lolcommit in data[i]) {
        if (data[i].hasOwnProperty(lolcommit)) {
          commits.push('data:image/jpg;base64, ' + data[i][lolcommit]);
        }
      }
    }
    $scope.lolcommits = shuffle(commits);
    $scope.$apply();
  })  

  // THANKS TO STACKOVERFLOW
  function shuffle(a,b,c,d){
  //array,placeholder,placeholder,placeholder
    c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;
    return a;
  }
}]);

app.controller('ProjectsController', ['$scope', function($scope) {
  var displayArray = [],
      rowArray = [];
console.log('test');
  $.getJSON('projects.json', function(data) {
    console.log(data);
    console.log('312312test');
    for(var i = 0; i < data.length; i++) {
      rowArray.push(data[i]);
      if((i + 1) % 3 === 0) {
        displayArray.push(rowArray);
        rowArray = [];
      }
    }
    if(rowArray.length > 0) {
      displayArray.push(rowArray);
    }
    $scope.projects = displayArray;
    $scope.$apply();
  });
}]);
