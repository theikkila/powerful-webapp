'use strict';

/**
 * @ngdoc overview
 * @name powerfulApp
 * @description
 * # powerfulApp
 *
 * Main module of the application.
 */
angular
  .module('powerfulApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'countTo',
    'restangular'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://localhost:8080');
  });
