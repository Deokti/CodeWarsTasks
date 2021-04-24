import { Kata } from './index';

describe('squareDigits', () => {

  it('getArrayFromNum function should return Array<string> when passing 9119', () => {
    expect(Kata.getArrayFromNum(9119)).toEqual(['9', '1', '1', '9']);
  });

  it('getStringAndReturnNumberSquared function should return number to the second power', () => {
    expect(Kata.getStringAndReturnNumberSquared('2')).toEqual(4);
    expect(Kata.getStringAndReturnNumberSquared('4')).toEqual(16);
    expect(Kata.getStringAndReturnNumberSquared('10')).toEqual(100);
  });

  it('addNumbersFromArrayStrings function get number array and return string', () => {
    expect(Kata.addNumbersFromArrayStrings(['9', '1', '1', '9'])).toEqual('811181');
  });

  it('squareDigits function should return 811181 when passing 9119', () => {
    expect(Kata.squareDigits(9119)).toEqual(811181);
  });
});
