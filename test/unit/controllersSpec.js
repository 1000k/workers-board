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
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('workers/workers.json')
        .respond([
          {name: 'Miles Davis', description: 'foo'},
          {name: 'John Coltrane', description: 'bar'}
        ]);

      scope = $rootScope.$new();
      ctrl = $controller('WorkersListAllCtrl', {$scope: scope});
    }));

    it('should create "workers" model with 2 workers fetched from xhr', function() {
      expect(scope.workers).toBeUndefined();
      $httpBackend.flush();

      expect(scope.workers).toEqualData([
        {name: 'Miles Davis', description: 'foo'},
        {name: 'John Coltrane', description: 'bar'}
      ]);
    });
  });

  // TODO Implement
  describe('WorkersDetailCtrl', function() {
    it('should ....', inject(function() {
      //spec body
    }));
  });
});
