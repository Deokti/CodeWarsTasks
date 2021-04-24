// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

export function findMissingLetter(array: string[]): string {
  const getCharCode: Array<number> = array.map((char) => char.charCodeAt(0));
  let charCode: number = 0;

  for (let i = getCharCode[0]; i < getCharCode[getCharCode.length - 1]; i++) {
    if (!getCharCode.includes(i)) charCode = i;
  }

  return String.fromCharCode(charCode);
}

findMissingLetter(['a', 'b', 'c', 'd', 'f']); // ["a", "b", "c", "d", "f"] -> "e";
findMissingLetter(['O', 'Q', 'R', 'S']); // ["O", "Q", "R", "S"] -> "P";

