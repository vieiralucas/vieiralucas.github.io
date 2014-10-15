'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
      when('/home', { templateUrl: 'views/home.html', controller: 'HomeCtrl'}).
      when('/projects', {templateUrl: 'views/projects.html', controller: 'ProjectsCtrl'}).
      when('/15-puzzle', {templateUrl: 'views/15-puzzle.html', controller: 'ProjectsCtrl'}).
      otherwise({
        redirectTo: '/home'
      });
  });
