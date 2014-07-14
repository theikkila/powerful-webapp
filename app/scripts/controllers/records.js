'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:RecordsCtrl
 * @description
 * # RecordsCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('RecordsCtrl', function ($scope, $routeParams, Restangular) {
    $scope.domain = {name: $routeParams.domain, records:[]};
    $scope.editmode = false;
    Restangular.one('domains', $routeParams.domain).all('records').getList().then(function (records) {
      $scope.records = records;
      $scope.domain.records = _.map(_.groupBy(records, 'type'), function(records, type){
        return {type: type, records: records};
      });
      console.log($scope.domain.records)
    });
  });
