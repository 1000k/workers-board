'use strict';

/* Controllers */

// function isNumber(x) {
//   if (typeof(x) != 'number' && typeof(x) != 'string') return false;
//   else return (x == parseFloat(x) && isFinite(x));
// }

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', '$http', 'locator', 'WorkersCache', function($scope, $http, locator, WorkersCache) {
    locator.getWorkers().success(function(data) {
      WorkersCache.put('workers', data);
      $scope.workers = data;
    });
  }])
  .controller('WorkersDetailCtrl', ['$scope', '$routeParams', '$http', 'locator', 'WorkersCache', function($scope, $routeParams, $http, locator, WorkersCache) {
    if ($routeParams.workerId) {
      var workerId = $routeParams.workerId;
      locator.getWorkers().success(function(data) {
        WorkersCache.put('workers', data);
        $scope.worker = data[workerId];
      });
    } else {
      locator.getWorkers().success(function(data) {
        WorkersCache.put('workers', data);

        var id = Math.floor(Math.random() * data.length);
        locator.showWorker(id);
      });
    }
  }])
  .controller('ControlPanel', ['$scope', '$routeParams', '$interval', 'WorkersCache', 'locator', function($scope, $routeParams, $interval, WorkersCache, locator) {
    this.timerSec = 2;
    this.timer_ = null;
    this.promise_ = null;

    this.timerStart = function() {
      var msec = this.timerSec * 1000;
      this.promise_ = $interval(function() { locator.randomWorker(); }, msec);
    }

    this.timerStop = function() {
      $interval.cancel(this.promise_);
    }

    $scope.randomWorker = function() {
      locator.randomWorker();
    }

    $scope.nextWorker = function() {
      if (!locator.isIdSet()) {
        locator.showTopWorker();
      } else {
        var currentId = parseInt($routeParams.workerId),
          workers = WorkersCache.get('workers');

        if ((currentId + 1) >= workers.length) {
          locator.showTopWorker();
        } else {
          locator.showWorker(currentId + 1);
        }
      }
    }

    $scope.prevWorker = function() {
      if (!locator.isIdSet()) {
        locator.showTopWorker();
      } else {
        var currentId = parseInt($routeParams.workerId),
          workers = WorkersCache.get('workers'),
          maxId = workers.length - 1;

        if ((currentId - 1) < 0) {
          locator.showWorker(maxId);
        } else {
          locator.showWorker(currentId - 1);
        }
      }
    }
  }]);