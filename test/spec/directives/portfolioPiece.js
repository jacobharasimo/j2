'use strict';

describe('Directive: portfolioPiece', function () {

  // load the directive's module
  beforeEach(module('j2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio-piece></portfolio-piece>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the portfolioPiece directive');
  }));
});
