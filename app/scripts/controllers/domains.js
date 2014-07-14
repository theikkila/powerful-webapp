'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:DomainsCtrl
 * @description
 * # DomainsCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('DomainsCtrl', function ($scope) {
    $scope.addDomainDialog = false;
    $scope.toggleDomainDialog = function() {
      $scope.addDomainDialog = !$scope.addDomainDialog;
    };
  });
