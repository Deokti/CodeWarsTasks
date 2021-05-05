// https://www.codewars.com/kata/5552101f47fc5178b1000050

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// digPow(46288, 3) => 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688; 2360688 / 46288 = 51 


export class G964 {

  public static digPow = (n: number, p: number) => {
    const countNumbersAnArray = Array
      .from(String(n), Number)
      .reduce((acc, number, index) => acc += number ** (p + index), 0);

    const poundOff = countNumbersAnArray / n;
    return Math.floor(poundOff) * n === countNumbersAnArray ? poundOff : -1;
  }
}
