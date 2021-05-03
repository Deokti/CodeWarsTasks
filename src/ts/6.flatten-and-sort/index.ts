// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

// Мы изначалньо знаем, что подаваться будет массив
// 1. Пробежаться по подаваемому массиву циклом
// 2. Если элемент не является массивов, положить в нужный массив
// 3. Если массив является массивом, перебрать его и каждый отдельный элемент положить в массив
// 4. Вернуть конечный массив

// P.S. Как оказалось в JS уже есть метод, который позволяет рекурсивно разложить вложенный массив.
// Об этом я узнал после решения задачи и очень удивился. Называется он Array.prototype.flat()  

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
