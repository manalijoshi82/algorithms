const expect = require('chai').expect;
const arrayOp = require('../solutions/7');
const getLongestInc = arrayOp.getLongestInc;

describe('getLongestInc should return the number of longest increasing numbers in', () => {
  let arr = [];
  it('simple cases', () => {
    arr = [2];
    expect(getLongestInc(arr)).to.equal(1);
    
    arr = [2,3];
    expect(getLongestInc(arr)).to.equal(2);
    
    arr = [3,2];
    expect(getLongestInc(arr)).to.equal(1);
  });

  it('an array where one number decreases', () => {
    arr = [11,12,13,14,2,3];
    expect(getLongestInc(arr)).to.equal(4);
  });

  it('an array where multiple numbers decrease', () => {
    arr = [4,3,2,5];
    expect(getLongestInc(arr)).to.equal(2);
  });

  it('an array where numbers increase and decrease many times', () => {
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

