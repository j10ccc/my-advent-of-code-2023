// Input data from https://adventofcode.com/2023/day/1/input

export default function day1_part1(data: string): number {
  let sum = 0;

  data.split("\n").forEach(line => {
    const chars = line.split("");
    const lastDigit = chars.findLast(char => {
      return char.charCodeAt(0) >= "0".charCodeAt(0) && char.charCodeAt(0) <= "9".charCodeAt(0)
    })
    const firstDigit = chars.find(char => {
      return char.charCodeAt(0) >= "0".charCodeAt(0) && char.charCodeAt(0) <= "9".charCodeAt(0)
    })

    if (lastDigit && firstDigit)
      sum += parseInt((firstDigit + lastDigit));
  })

  return sum;
}
