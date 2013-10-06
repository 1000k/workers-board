'use strict';

/* Services */

angular.module('myApp.services', ['ngResource'])
  .factory('Worker', function($resource) {
    return $resource('workers/:workerId.json', {}, {
        query: {method: 'GET', params: {workerId: 'workers'}, isArray: true}
    })
  })
  .value('version', '0.1');
