'use strict';

/* Services */

angular.module('myApp.services', [])
  .factory('WorkersCache', ['$cacheFactory', function($cacheFactory) {
    return $cacheFactory('workersCache');
  }])
  .value('version', '0.1');
