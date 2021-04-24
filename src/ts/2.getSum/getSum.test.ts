import { getSum } from './index';


describe('getSum function', () => {

  it('getSum function should return 1 when passing parameters 1 and 0', () => {
    expect(getSum(1, 0)).toEqual(1);
  });

  it('getSum function should return 3 when passing parameters 1 and 2', () => {
    expect(getSum(1, 2)).toEqual(3);
  });

  it('getSum function should return 1 when passing parameters 1 and 1', () => {
    expect(getSum(1, 1)).toEqual(1);
  });

  it('getSum function should return 2 when passing parameters -1 and 2', () => {
    expect(getSum(-1, 2)).toEqual(2);
  });
});
