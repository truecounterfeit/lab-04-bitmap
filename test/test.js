'use strict';

const bmp = require('../lib/modules.js');

const expect = require('expect');

//read test
describe( 'read fakeArray', function(){
  describe('returns fakeArray [1,2,3,4]', function() {
    it('it should returns fakeArray [1,2,3,4]', function(){
      let result = bmp.fakeFunction(0, 3);
      expect(result).toBe([1,2,3,4]);
    });
  });
});
