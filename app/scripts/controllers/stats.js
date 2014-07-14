'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:StatsctrlCtrl
 * @description
 * # StatsctrlCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('StatsCtrl', function ($scope, Restangular) {
    Restangular.one('stats').get().then(function (stats) {
      $scope.queries = stats.queries;
    });
  });
