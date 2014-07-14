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
      .when('/records/:domain', {
        templateUrl: 'views/records.html',
        controller: 'RecordsCtrl'
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
    RestangularProvider.setDefaultHttpFields({cache: true});
  });
