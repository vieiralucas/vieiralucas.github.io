'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('HomeCtrl', function ($scope) {
        var commits = [],
            lolcommit;

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

            $('#myCarousel').carousel({
                interval: 500
            });
        })  

        // THANKS TO STACKOVERFLOW
        function shuffle(a,b,c,d){
            //array,placeholder,placeholder,placeholder
            c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;
            return a;
        }
  });
