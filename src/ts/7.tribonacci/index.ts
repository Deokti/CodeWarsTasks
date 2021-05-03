// https://www.codewars.com/kata/556deca17c58da83c00002db/

export function tribonacci(numbers: Array<number>, n: number): number[] {
  if (n === 1) return [numbers[0]];

  const result: Array<number> = [];
  const getPreviosNumber = (n: number) => result[result.length - n];

  for (let i = 0; i < n; i++) {
    result.length < 3
      ? result.push(...numbers)
      : result.push((getPreviosNumber(1) + getPreviosNumber(2) + getPreviosNumber(3)))
  }

  return result.slice(0, -2);
}

