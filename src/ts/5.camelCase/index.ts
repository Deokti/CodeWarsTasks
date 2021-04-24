// https://www.codewars.com/kata/587731fda577b3d1b0001196

function toUpperCaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function camelCase(str: string): string {
  const getArrayFromString = str.trim().split(' ');
  const result: Array<string> = [];

  for (let i = 0; i < getArrayFromString.length; i++) {
    const value = `${toUpperCaseFirstLetter(getArrayFromString[i])}`;
    result.push(value);
  }

  return result.join('');
}
