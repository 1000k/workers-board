'use strict';

/* Services */

angular.module('myApp.services', [])
  .factory('WorkersCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('workersCache');
  }])
  .factory('locator', ['$routeParams', '$http', '$location', 'WorkersCache', function($routeParams, $http, $location, WorkersCache) {
    return {
      isIdSet: function() {
        var id = $routeParams.workerId;
        if (typeof(id) != 'number' && typeof(id) != 'string') return false;
        return (id == parseFloat(id) && isFinite(id));
      },
      getWorkers: function() {
        return $http.get('workers/workers.json');
      },
      showWorker: function(id) {
        console.log('locator.showWorker()');
        $location.path('/detail/' + id);
      },
      showTopWorker: function() {
        this.showWorker(0);
      },
      showLastWorker: function() {
        var workers = WorkersCache.get('workers'),
          maxId = workers.length - 1;
        this.showWorker(maxId);
      },
      randomWorker: function() {
        var workers = WorkersCache.get('workers'),
          id = Math.floor(Math.random() * workers.length);
        console.log(id);
        this.showWorker(id);
      }
    }
  }])
  .value('version', '0.1');