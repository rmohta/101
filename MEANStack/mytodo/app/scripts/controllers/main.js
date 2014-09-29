'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch('todos', function () {
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);  
    
    $scope.addTodo = function (){
        $scope.todos.push($scope.todoToAdd);
        $scope.todoToAdd = ''; //reset it to empty string after adding  
    };
    $scope.removeTodo = function (index){
        $scope.todos.splice(index, 1); //index will be zero based. 
    };
  });
