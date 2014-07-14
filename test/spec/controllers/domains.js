'use strict';

describe('Controller: DomainsCtrl', function () {

  // load the controller's module
  beforeEach(module('powerfulApp'));

  var DomainsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DomainsCtrl = $controller('DomainsCtrl', {
      $scope: scope
    });
  }));

  it('should toggle addDomainDialog-variable', function () {
    expect(scope.addDomainDialog).toBe(false);
    scope.toggleDomainDialog();
    expect(scope.addDomainDialog).toBe(true);
  });
});

