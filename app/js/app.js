'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/detail/:workerId', {templateUrl: 'partials/detail.html', controller: 'WorkersDetailCtrl'});
    $routeProvider.when('/detail', {templateUrl: 'partials/detail.html', controller: 'WorkersDetailCtrl'});
    $routeProvider.when('/list-all', {templateUrl: 'partials/list-all.html', controller: 'WorkersListAllCtrl'});
    $routeProvider.otherwise({redirectTo: '/detail'});
  }]);
