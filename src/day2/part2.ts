export default function day2_part2(input: string) {
  let sum = 0;
  input.split("\n").forEach(line => {
    const gameId = line.split(":")[0].split("Game ")[1];

    if (!gameId) return;
    const turns = line.split(":")[1].split(";");

    const map = new Map<string, number>();
    map.set("red", 0);
    map.set("green", 0);
    map.set("blue", 0);

    turns.forEach(turn => {
      const sets = turn.split(",").map(str => str.trim());
      for (const set of sets) {
        const [num, color] = set.split(" ");
        if (map.has(color) && (map.get(color)! < parseInt(num))) {
          map.set(color, parseInt(num));
        }
      }
    })

    sum += map.get("red")! * map.get("green")! * map.get("blue")!;
  })

  return sum;
} 