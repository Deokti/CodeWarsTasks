// https://www.codewars.com/kata/526571aae218b8ee490006f4

// Напишите функцию, которая принимает на вход целое число и возвращает количество битов, равных единице в двоичном представлении этого числа. Вы можете гарантировать, что ввод неотрицательный. 
// Пример: двоичное представление 1234 - 10011010010, поэтому в этом случае функция должна вернуть 5.

export function countBits(n: number): number {
  const binary: string = (n).toString(2);
  let result: number = 0;

  for (let i = 0; i < binary.length; i++) {
    const number: number = Number(binary[i]);
    if (number === 1) result += 1;
  }

  return result;
}

console.log(countBits(1234));
