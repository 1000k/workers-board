'use strict';

// Declare app level module which depends on filters, and services
angular
  .module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/detail/:workerId', {
        templateUrl: 'partials/detail.html',
        controller: 'WorkersDetailCtrl'
      })
      .when('/detail', {
        templateUrl: 'partials/detail.html',
        controller: 'WorkersDetailCtrl'
      })
      .when('/list-all', {
        templateUrl: 'partials/list-all.html',
        controller: 'WorkersListAllCtrl'
      })
      .otherwise({
        redirectTo: '/detail'
      });
  }]);
