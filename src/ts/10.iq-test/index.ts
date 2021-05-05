// https://www.codewars.com/kata/552c028c030765286c00007d


// Если число больше 1, то значит это нужное число и следует вывести его индекс + 1
// Если число массива больше 1, то значит нужно отфильтровать массив
// и вывести индекс числа + 1, которое в 1 массив не попало. 

export function iqTest(numbers: string): number {
  const getArray = numbers.split(' ');
  const even = getArray.filter((item) => Number(item) % 2 === 0);
  let result = 0;

  if (even.length === 1) {
    const numberSearch = even[0];

    getArray.forEach((value, index) => {
      if (numberSearch === value) {
        result = index + 1
      };
    });
  }

  if (even.length >= 2) {
    getArray.forEach((value, index) => {
      if (!(even.indexOf(value) !== -1)) {
        result = index + 1
      }
    });
  }

  return result;
}
