import { tribonacci } from './index';

describe('flattenAndSort function', () => {

  it('flattenAndSort function should return return sequence of numbers tribonacci', () => {
    expect(tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
    expect(tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
    expect(tribonacci([300, 200, 100], 0)).toEqual([]);
  });

});
