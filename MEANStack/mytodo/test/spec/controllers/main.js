'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start with', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add item to the list', function () {
      scope.todoToAdd = 'Test 1';
      scope.addTodo();
      expect(scope.todos.length).toBe(1);
    });
    
    it('should add then remove item from the list', function () {
      scope.todoToAdd = 'Test 2';
      scope.addTodo();
      scope.removeTodo(0);
      expect(scope.todos.length).toBe(0);
    });
});
