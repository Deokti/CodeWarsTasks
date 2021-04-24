// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function repairString(string: string, n: number) {
  let result: string = '';
  while (n-- > 0) result += string;
  return result;
}

function toUpperCaseFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export function accum(s: string): string {
  const { length } = s;
  let result: string = '';

  for (let i = 0; i < length; i++) {
    result += `${toUpperCaseFirstLetter(repairString(s[i], i + 1))}-`;
  }

  return result.slice(0, -1);
}

