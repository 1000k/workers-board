'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /list-all when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/list-all");
  });


  describe('list-all', function() {

    beforeEach(function() {
      browser().navigateTo('#/list-all');
    });


    it('should render list-all when user navigates to /list-all', function() {
      expect(element('[ng-view] h1:first').text()).
        toMatch(/All Workers/);
    });

  });


  describe('detail', function() {

    beforeEach(function() {
      browser().navigateTo('#/detail');
    });

    // TODO implement
    // it('should render detail when user navigates to /detail', function() {
    //   expect(element('[ng-view] p:first').text()).
    //     toMatch(/partial for view 2/);
    // });

  });
});
