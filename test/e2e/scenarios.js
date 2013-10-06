'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should automatically redirect to /detail/\d when location hash/fragment is empty', function() {
    expect(browser().location().url()).toMatch(/detail\/\d+/);
  });


  describe('list-all', function() {

    beforeEach(function() {
      browser().navigateTo('#/list-all');
    });

    it('should render list-all when user navigates to /list-all', function() {
      expect(element('[ng-view] h1:first').text())
        .toMatch(/All Workers/);
    });

  });


  describe('random', function() {

    beforeEach(function() {
      browser().navigateTo('#/detail');
    });

    it('should redirect to detail worker page when user navigates to /detail', function() {
      expect(browser().location().url()).toMatch(/detail\/\d+/);
    });

  });


  describe('detail', function() {
    
    // FIXME hard corded value (depend on workers.json)
    beforeEach(function() {
      browser().navigateTo('#/detail/0');
    });

    it('should render detail page when user navigates to /detail/{id}', function() {
      expect(element('[ng-view] h2:first').text())
        .toBe('Miles Davis');
    });
  });

});
