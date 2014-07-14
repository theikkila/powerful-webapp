'use strict';

/**
 * @ngdoc function
 * @name powerfulApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the powerfulApp
 */
angular.module('powerfulApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
