angular.module('myApp')
    .directive('todos', function() {
        return {
            templateUrl: 'templates/todos.html',
            controller: 'mainCtrl',
            replace: true
        }
    })