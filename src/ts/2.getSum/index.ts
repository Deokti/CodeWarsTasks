// https://www.codewars.com/kata/55f2b110f61eb01779000053

export function getSum(a: number, b: number): number {
  if (a === b) return a;

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let result: number = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}



