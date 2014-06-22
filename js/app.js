var app = angular.module('app', ['ngRoute']);

 // Note: Providers can only be injected into config functions. Thus you could not inject $routeProvider into PhoneListCtrl. 
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', { templateUrl: 'partials/home.html', controller: 'HomeController'}).
      when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'}).
      when('/pong', {templateUrl: 'partials/pong/pong.html', controller: 'PongController'}).
      otherwise({
        redirectTo: '/home'
      });
  }
]);

app.controller('MainController', function($scope){
	this.nav = 1;

    this.setNav = function(newValue){
      this.nav = newValue;
    };

    this.isSet = function(navName){
      return this.nav === navName;
    };
})

app.controller('HomeController', function(){
	
});

app.controller('ProjectsController',function(){

});

app.controller('PongController',function(){
	console.log('test');
});