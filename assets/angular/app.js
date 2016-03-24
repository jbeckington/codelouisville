'use strict';


var app = angular.module('myApp', []);

app.controller('controller', ['$scope', function($scope) {
    $scope.function1 = function(msg) {
        alert(msg + ' first function call!');
    };
    $scope.function2 = function(msg) {
        alert(msg + ' second function call!');
    };
}]);
