var app = angular.module('app', ['ngRoute', 'firebase', 'slick']);

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

app.controller('HomeController', ['$scope', '$firebase', function($scope, $firebase) {
  var lolcommits = new Firebase('https://vieiralucas.firebaseio.com/lol-commits'),
      imgs = $firebase(lolcommits).$asArray();

  imgs.$loaded().then(function() {
    $scope.lolcommits = imgs;
    imgs = shuffle(imgs);
  });

  // THANKS TO STACKOVERFLOW
  function shuffle(a,b,c,d){
  //array,placeholder,placeholder,placeholder
    c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;
    return a;
  }
}]);

app.controller('ProjectsController', ['$scope', '$firebase', function($scope, $firebase) {
  var projectsRef = new Firebase('https://vieiralucas.firebaseio.com/projects'),
      sync = $firebase(projectsRef),
      syncArray = sync.$asArray(),
      displayArray = [],
      rowArray = [];
  syncArray.$loaded().then(function() {
    console.log(syncArray[0]);
    for (var i = 0; i < syncArray.length; i++) {
      rowArray.push(syncArray[i]);
      if((i + 1) % 3 === 0) {
        displayArray.push(rowArray);
        rowArray = [];
      }
    }
    if(rowArray.length > 0) {
      displayArray.push(rowArray);
    }
    $scope.projects = displayArray;
    console.log(displayArray[0]);
  });
}]);
