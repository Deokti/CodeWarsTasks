import { accum } from './index';

describe('accum function', () => {

  it('accum function shoild return *-**-*** whan passing parameters ***', () => {
    const parameter = 'abcd';
    const response = 'A-Bb-Ccc-Dddd';

    expect(accum(parameter)).toEqual(response);
  });

  it('accum function shoild return *-**-*** whan passing parameters ***', () => {
    const parameter = 'RqaEzty';
    const response = 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy';

    expect(accum(parameter)).toEqual(response);
  });

  it('accum function shoild return *-**-*** whan passing parameters ***', () => {
    const parameter = 'cwAt';
    const response = 'C-Ww-Aaa-Tttt';

    expect(accum(parameter)).toEqual(response);
  });
});
