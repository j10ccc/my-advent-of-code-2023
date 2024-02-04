export default function day4_part2(input: string) {
  const lines = input.split("\n");
  let sum = 0;
  const map = new Map<number, number>();

  lines.forEach((_, index) => map.set(index + 1, 1));

  let i = 1;
  for (const line of lines) {
    const parts = line.split(": ")[1].split(" | ");
    const [winningNumbers, haveNumbers] = parts.map(part => (
      part.trim()
        .split(" ")
        .filter(s => s.length > 0)
        .map(num => parseInt(num))
    ));

    const set = new Set<number>();
    let matched = 0;

    winningNumbers.forEach(num => set.add(num));
    haveNumbers.forEach(num => set.has(num) && matched++);

    for (let j = i + 1; j <= matched + i; j++) {
      if (map.has(j)) {
        map.set(j, map.get(j)! + map.get(i)!)
      }
    }

    i++;
  }

  for (const value of map.values()) {
    sum += value;
  }

  return sum;
}