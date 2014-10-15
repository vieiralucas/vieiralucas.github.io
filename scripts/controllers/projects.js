'use strict';

/**
 * @ngdoc function
 * @name app.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('ProjectsCtrl', function ($scope) {
        var projects;
        $.getJSON('projects.json', function(data) {
            projects = {
                "node": data.node,
                "webapps": data.webapps,
                "games": data.games,
                "others": data.others
            };
            $scope.projects = {};
            var rowArray = [], displayArray = [], type;
            for (type in projects) {
                if (projects.hasOwnProperty(type)) {
                    for(var i = 0; i < projects[type].length; i++) {
                        rowArray.push(projects[type][i]);
                        if((i + 1) % 3 === 0) {
                            displayArray.push(rowArray);
                            rowArray = [];
                        }
                    }
                    if(rowArray.length > 0) {
                        displayArray.push(rowArray);
                        rowArray = [];
                    }
                    projects[type] = displayArray;
                    displayArray = [];
                }
            }
            $scope.projects = projects;
            console.log(projects);
            $scope.$apply();
        });
    });
