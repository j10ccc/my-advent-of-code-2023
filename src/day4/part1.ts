export default function day4_part1(input: string) {
  const lines = input.split("\n");
  let sum = 0;

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

    if (matched > 0) sum += Math.pow(2, matched - 1);
  }

  return sum;
}