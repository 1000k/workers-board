'use strict';

/* Controllers */

function getWorkers(http) {
  return http.get('workers/workers.json');
}


function showWorker(location, id) {
  location.path('/detail/' + id);
}

function showTopWorker(location) {
  showWorker(location, 0);
}

function isNumber(x){ 
    if( typeof(x) != 'number' && typeof(x) != 'string' )
        return false;
    else 
        return (x == parseFloat(x) && isFinite(x));
}

angular.module('myApp.controllers', [])
  .controller('WorkersListAllCtrl', ['$scope', '$http', 'WorkersCache', function($scope, $http, WorkersCache) {
    getWorkers($http).success(function(data) {
      WorkersCache.put('workers', data);
      $scope.workers = data;
    });
  }])
  .controller('WorkersDetailCtrl', ['$scope', '$routeParams', '$http', '$location', 'WorkersCache', function($scope, $routeParams, $http, $location, WorkersCache) {
    if ($routeParams.workerId) {
      var workerId = $routeParams.workerId;
      getWorkers($http).success(function(data) {
        WorkersCache.put('workers', data);

        $scope.worker = data[workerId];
      });
    } else {
      getWorkers($http).success(function(data) {
        WorkersCache.put('workers', data);

        var idx = Math.floor(Math.random() * data.length);
        showWorker($location, idx);
      });
    }
  }])
  .controller('ControlPanel', ['$scope', '$routeParams', '$location', 'WorkersCache', function($scope, $routeParams, $location, WorkersCache) {
    
    $scope.nextWorker = function() {
      if (!isNumber($routeParams.workerId)) {
        showTopWorker($location);
      } else {
        var currentId = parseInt($routeParams.workerId),
            workers = WorkersCache.get('workers');

        if ((currentId + 1) >= workers.length) {
          showTopWorker($location);
        } else {
          showWorker($location, currentId + 1);
        }
      }
    }

    $scope.previousWorker = function() {
      if (!isNumber($routeParams.workerId)) {
        showTopWorker($location);
      } else {
        var currentId = parseInt($routeParams.workerId),
            workers = WorkersCache.get('workers'),
            maxId = workers.length - 1;

        if ((currentId - 1) < 0) {
          showWorker($location, maxId);
        } else {
          showWorker($location, currentId - 1);
        }
      }
    }
  }]);