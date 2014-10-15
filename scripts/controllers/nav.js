'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('NavCtrl', function ($scope, $location) {
        $scope.isHomeActive = function() {
            if($location.path() === '/home') {
                return true;
            }
            return false;
        }
    });
