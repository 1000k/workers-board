'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  // Adds `toEqualData` matcher.
  // see: [AngularJS: 11 - REST and Custom Services](http://docs.angularjs.org/tutorial/step_11)
  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('myApp.controllers'));
  beforeEach(module('myApp.services'));

  describe('WorkersListAllCtrl', function(){
    // TODO implement
  });

  // TODO Implement
  describe('WorkersDetailCtrl', function() {
    it('should ....', inject(function() {
      // TODO implement
    }));
  });
});