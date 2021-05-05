import { G964 } from './index';

describe('solution function', () => {

  it('G964.digPow function', () => {
    expect(G964.digPow(89, 1)).toEqual(1);
  });

  it('G964.digPow function', () => {
    expect(G964.digPow(92, 1)).toEqual(-1);
  });

  it('G964.digPow function', () => {
    expect(G964.digPow(695, 2)).toEqual(2);
  });

  it('G964.digPow function', () => {
    expect(G964.digPow(46288, 3)).toEqual(51);
  });

});
