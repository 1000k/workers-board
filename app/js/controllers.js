'use strict';

/* Controllers */

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
    $scope.progress = {
      value: 0,
      max: 1000000
    };

    $scope.timerSec = 5;
    $scope.restMs_ = 0;
    $scope.limitMs_ = 0;
    $scope.intervalMs_ = 50;
    $scope.promise_ = null;

    $scope.startTimer = function() {
      $scope.limitMs_ = $scope.restMs_ = $scope.timerSec * 1000;

      $scope.resetTimer_();
      $scope.promise_ = $interval(function() {
        $scope.restMs_ -= $scope.intervalMs_;

        var restRate = ($scope.limitMs_ - $scope.restMs_) / $scope.limitMs_;
        var restBarLength = $scope.progress.max * restRate;

        $scope.progress.value = restBarLength;

        if ($scope.progress.value > $scope.progress.max) {
          $scope.resetTimer_();
          $scope.randomWorker();
          $scope.startTimer();
        }
      }, $scope.intervalMs_);
    };

    $scope.stopTimer = function() {
      $scope.resetTimer_();
    };

    $scope.resetTimer_ = function() {
      $scope.progress.value = 0;
      $interval.cancel($scope.promise_);
    };

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
        var currentId = parseInt($routeParams.workerId);

        if ((currentId - 1) < 0) {
          locator.showLastWorker();
        } else {
          locator.showWorker(currentId - 1);
        }
      }
    }
  }]);