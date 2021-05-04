import { countBits } from './index';

describe('solution function', () => {

  it('solution function return the binary representation of a number by counting only ones', () => {
    expect(countBits(1234)).toEqual(5);
  });

  it('solution function return the binary representation of a number by counting only ones', () => {
    expect(countBits(0)).toEqual(0);
  });

  it('solution function return the binary representation of a number by counting only ones', () => {
    expect(countBits(10)).toEqual(2);
  });

  it('solution function return the binary representation of a number by counting only ones', () => {
    expect(countBits(9)).toEqual(2);
  });

});
