// https://www.codewars.com/kata/546e2562b03326a88e000020

export class Kata {

  static getArrayFromNum(num: number): Array<string> {
    return [...String(num)];
  }

  static getStringAndReturnNumberSquared(string: string): number {
    return Number(string) ** 2;
  }

  static addNumbersFromArrayStrings(array: Array<string>): string {
    const { length } = array;
    let result: string = '';

    for (let i = 0; i < length; i++) {
      result += this.getStringAndReturnNumberSquared(array[i]);
    }

    return result;
  }

  static squareDigits(num: number): number {
    return Number(this.addNumbersFromArrayStrings(this.getArrayFromNum(num)));
  }
}

// ---- Второй способ решения ----
// export class Kata {

//   static squareDigits(num: number): number {
//     return Number([...String(num)]
//       .reduce((acc, currentValue) => (acc += (Number(currentValue) ** 2)), ''));
//   }
// }

