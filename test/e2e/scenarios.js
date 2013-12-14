'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });

  it('should redirect to /detail/{id} when location hash/fragment is empty', function() {
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

    it('should redirect to detail worker page when user navigates to /detail without workerId', function() {
      browser().navigateTo('#/detail');
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

  describe('control panel', function() {

    it('should render next page when user click "next" link', function() {
      browser().navigateTo('#/detail/0');
      element('.nextWorker').click();
      
      expect(browser().location().url()).toBe('/detail/1');
    });

    it('should render top worker page when user click "next" link on the last worker', function() {
      // FIXME hard corded value (depend on workers.json)
      browser().navigateTo('#/detail/4');
      element('.nextWorker').click();
      
      expect(browser().location().url()).toBe('/detail/0');
    });

    it('should render previous page when user click "previous" link', function() {
      browser().navigateTo('#/detail/1');
      element('.previousWorker').click();
      
      expect(browser().location().url()).toBe('/detail/0');
    });

    it('should render the last worker page when user click "previous" link on the first worker', function() {
      browser().navigateTo('#/detail/0');
      element('.previousWorker').click();
      
      // FIXME hard corded value (depend on workers.json)
      expect(browser().location().url()).toBe('/detail/4');
    });
  });

});