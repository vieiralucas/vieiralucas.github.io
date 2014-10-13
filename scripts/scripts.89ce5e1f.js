"use strict";angular.module("app",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).when("/15-puzzle",{templateUrl:"views/15-puzzle.html",controller:"ProjectsCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("app").controller("NavCtrl",["$scope","$location",function(a,b){a.isHomeActive=function(){return"/home"===b.path()?!0:!1}}]),angular.module("app").controller("HomeCtrl",["$scope",function(a){function b(a,b,c,d){for(c=a.length;c;)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;return a}var c,d=[];$.getJSON("lolcommits.json",function(e){for(var f=0;f<e.length;f++)for(c in e[f])e[f].hasOwnProperty(c)&&d.push("data:image/jpg;base64, "+e[f][c]);a.lolcommits=b(d),a.$apply(),$("#myCarousel").carousel({interval:500})})}]),angular.module("app").controller("ProjectsCtrl",["$scope",function(a){var b;$.getJSON("projects.json",function(c){b={node:c.node,webapps:c.webapps,games:c.games,others:c.others},a.projects={};var d,e=[],f=[];for(d in b)if(b.hasOwnProperty(d)){for(var g=0;g<b[d].length;g++)e.push(b[d][g]),(g+1)%3===0&&(f.push(e),e=[]);e.length>0&&(f.push(e),e=[]),b[d]=f,f=[]}a.projects=b,console.log(b),a.$apply()})}]);