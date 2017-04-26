const expect = require('chai').expect;
const arrayOp = require('../solutions/7');
const getLongestInc = arrayOp.getLongestInc;

describe('getLongestInc', () => {
    it('should return the number of longest increasing numbers in an array', () => {
      let arr = [2,3];
      expect(getLongestInc(arr)).to.equal(2);

      arr = [11,12,13,14,2,3];
      expect(getLongestInc(arr)).to.equal(4);

      arr = [4,3,2,5];
      expect(getLongestInc(arr)).to.equal(2);

      arr = [1,3,2,0,5,6,7,8];
      expect(getLongestInc(arr)).to.equal(6);

      arr = [1,2,3,2,3,5];
      expect(getLongestInc(arr)).to.equal(4);

      arr = [1,2,10,9,3,5];
      expect(getLongestInc(arr)).to.equal(4);

      arr = [4,7,5,4,20,10];
      expect(getLongestInc(arr)).to.equal(3);

      arr = [1,3,5,2,4,7];
      expect(getLongestInc(arr)).to.equal(4);
  });
});

