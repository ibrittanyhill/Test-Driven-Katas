const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('Returns empty array if no matches found', () => {
      expect(twoSum([1, 2, 3], 10)).to.deep.equal([]);
    });

    it('Returns correct values', () => {
        expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
        expect(twoSum([10, 20, 30, 40], 50)).to.deep.equal([0, 3]);
      });

      it('Returns two distinct indicies', () => {
        expect(twoSum([2, 5, 5], 10)).to.deep.equal([1, 2]);
      });


  });
  