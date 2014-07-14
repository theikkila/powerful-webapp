'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('MainCtrl', function ($scope, Restangular) {
    Restangular.all('domains').getList().then(function (domains) {
      $scope.domains = domains;
    });
  });
