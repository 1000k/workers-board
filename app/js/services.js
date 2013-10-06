'use strict';

/* Services */

// angular.module('myApp.services', ['ngResource'])
//   .factory('Worker', function($resource) {
//     return $resource('workers/workers.json', {}, {
//         query: {method: 'GET', params: {workerId: 'workers'}, isArray: true}
//         random: {
//           method: 'GET',
//           params: {workerId: 'workers'}, isArray: true}

//     })
//   })
angular.module('myApp.services', [])
  // .factory('Worker', ['$http', function($http) {
  //   return {
  //     getAll: function() {
  //       $http.get('workers/workers.json').success(function(data) {
  //         console.log(data);
  //         return data;
  //       });
  //     }
  //   }
      
  // }])
  .value('version', '0.1');
