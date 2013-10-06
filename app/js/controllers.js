'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('workers/workers.json').success(function(data) {
      $scope.workers = data;
    });
  }])
  // .controller('WorkersRandomCtrl', ['$location', '$http', function($location, $http) {
  //   $http.get('workers/workers.json').success(function(data) {
  //       var idx = Math.floor(Math.random() * data.length);
  //       $location.path('/detail/' + idx);
  //     });
  // }])
  .controller('WorkersDetailCtrl', ['$scope', '$routeParams', '$http', '$location', function($scope, $routeParams, $http, $location) {
    if ($routeParams.workerId) {
      var workerId = $routeParams.workerId;
      $http.get('workers/workers.json').success(function(data) {
        $scope.worker = data[workerId];
      });
    } else {
      $http.get('workers/workers.json').success(function(data) {
        var idx = Math.floor(Math.random() * data.length);
        $location.path('/detail/' + idx);
      });
    }
  }]);