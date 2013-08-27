'use strict';

describe('Controller: MyhistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('j2App'));

  var MyhistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyhistoryCtrl = $controller('MyhistoryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
