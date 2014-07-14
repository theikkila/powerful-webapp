'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
