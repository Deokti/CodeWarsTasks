import { iqTest } from './index';

describe('solution function', () => {

  it('solution function return the number of a different number', () => {
    expect(iqTest("2 4 7 8 10")).toEqual(3); // Third number is odd, while the rest of the numbers are even
    expect(iqTest("1 2 1 1")).toEqual(2); // Second number is even, while the rest of the numbers are odd
  });

});
