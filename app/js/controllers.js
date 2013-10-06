'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('workers/workers.json').success(function(data) {
      $scope.workers = data;
      console.log($scope.workers);
    });
  }])
  .controller('WorkersDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    $scope.worker = $routeParams.workerId
      ? Worker.findById($routeParams.workerId)
      : Worker.random();
    // $scope.worker = Worker.query('one');
  }]);