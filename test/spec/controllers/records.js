'use strict';

describe('Controller: RecordsCtrl', function () {

  // load the controller's module
  beforeEach(module('powerfulApp'));

  var RecordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecordsCtrl = $controller('RecordsCtrl', {
      $scope: scope
    });
  }));

  it('should inject restangular', inject(function(Restangular) {
    expect(Restangular).toBeDefined();
  }));
});
