import { camelCase } from './index';

describe('camelCase function', () => {

  it('camelCase function should return - AaaAaa when passing parameters - aaa aaa', () => {
    expect(camelCase('aaa aaa')).toEqual('AaaAaa');
  });

  it('camelCase function should return - AaaAaa when passing parameters - aaa aaa', () => {
    expect(camelCase('hello case')).toEqual('HelloCase');
  });

  it('camelCase function should return - AaaAaa when passing parameters - aaa aaa', () => {
    expect(camelCase('camel case word')).toEqual('CamelCaseWord');
  });
});
