'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('progressBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'partials/progressbar.html'
    }
  });
