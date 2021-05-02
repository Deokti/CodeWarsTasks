import { flattenAndSort } from './index';

describe('flattenAndSort function', () => {

  it('flattenAndSort function should return return sorted homogeneous array', () => {
    expect(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});
