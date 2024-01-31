export default function day2_part1(input: string) {
  let sum = 0;
  input.split("\n").forEach(line => {
    const gameId = line.split(":")[0].split("Game ")[1];

    if (!gameId) return;
    const turns = line.split(":")[1].split(";");

    const invalid = turns.find(turn => {
      const sets = turn.split(",").map(str => str.trim());
      for (const set of sets) {
        const [num, color] = set.split(" ");
        if (color === "red" && parseInt(num) > 12) {
          return true;
        } else if (color === "green" && parseInt(num) > 13) {
          return true;
        } else if (color === "blue" && parseInt(num) > 14) {
          return true;
        }
      }
    })

    if (!invalid) {
      sum += parseInt(gameId);
    }
  })

  return sum;
} 