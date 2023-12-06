// Input data from https://adventofcode.com/2023/day/1/input

enum DigitLetter {
  zero = 0,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
}

function evalDigitLetter(s: string): number {
  if (s.charCodeAt(0) >= "0".charCodeAt(0) && s.charCodeAt(0) <= "9".charCodeAt(0)) {
    return parseInt(s);
  } else {
    return DigitLetter[s as keyof typeof DigitLetter];
  }
}

export default function day1_part2(data: string): number {
  const patterns = Object.keys(DigitLetter);
  let sum = 0;

  data.split("\n").forEach(line => {
    const lowerCaseLine = line.toLowerCase();

    // Find the first digit
    let firstOccur: string | null = null;
    let firstIndex = lowerCaseLine.length;
    patterns.forEach(pattern => {
      const index = lowerCaseLine.indexOf(pattern);
      if (index !== -1 && index < firstIndex) {
        firstIndex = index;
        firstOccur = pattern;
      }
    })

    // Find the last digit
    let lastOccur: string | null = null;
    let lastIndex = -1;
    patterns.forEach(pattern => {
      const index = lowerCaseLine.lastIndexOf(pattern);
      if (index !== -1 && index > lastIndex) {
        lastIndex = index;
        lastOccur = pattern;
      }
    })

    if (firstOccur && lastOccur) {
      sum += evalDigitLetter(firstOccur) * 10 + evalDigitLetter(lastOccur);
    }
  })

  return sum;
}
