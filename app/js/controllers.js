'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', 'Worker', function($scope, Worker) {
    $scope.workers = Worker.query();
  }])
  .controller('WorkersDetailCtrl', ['$scope', 'Worker', function($scope, Worker) {
    $scope.worker = Worker.query('one');
  }]);