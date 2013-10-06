'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('workers/workers.json').success(function(data) {
      $scope.workers = data;
    });
  }])
  .controller('WorkersDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    if ($routeParams.workerId) {
      var workerId = $routeParams.workerId;
      $http.get('workers/workers.json').success(function(data) {
        $scope.worker = data[workerId];
      });
    } else {
      $http.get('workers/workers.json').success(function(data) {
        var idx = Math.floor(Math.random() * data.length);
        $scope.worker = data[idx];
      });
    }
  }]);