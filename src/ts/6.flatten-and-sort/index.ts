const ARRAY_TEST_1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

// Мы изначалньо знаем, что подаваться будет массив
// 1. Пробежаться по подаваемому массиву циклом
// 2. Если элемент не является массивов, положить в нужный массив
// 3. Если массив является массивом, перебрать его и каждый отдельный элемент положить в массив
// 4. Вернуть конечный массив

export function flattenAndSort(arr: number[] | number[][]): number[] {
  const isSorted = (a: number, b: number) => a - b;

  const result: Array<number> = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const item: number | number[] = arr[i];

    Array.isArray(item)
      ? result.push(...flattenAndSort(item))
      : result.push(item)
  }

  return result.sort(isSorted);
}
