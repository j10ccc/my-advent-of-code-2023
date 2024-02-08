function epoch(seeds: number[], maps: Array<[destination: number, source: number, range: number][]>) {
  let min = Infinity;

  seeds.forEach(seed => {
    const tmp = maps.reduce((prev, map) => {
      const tmp = map.find(item => {
        return prev >= item[1] && ((prev - item[1]) < item[2])
      })
      const dest = tmp === undefined ? prev : tmp[0] + (prev - tmp[1]);
      return dest;
    }, seed)
    min = Math.min(tmp, min);
  })

  return min;
}

export default function day5_part2(input: string) {
  const [seedBlock, ...mapBlocks] = input.split("\n\n");
  const seedPairs = seedBlock.split(": ")[1].split(" ").map(num => parseInt(num));
  let seeds: number[] = [];
  const res: number[] = [];

  const maps = mapBlocks.map(block => {
    const [_, ...lines] = block.split("\n");

    return lines.map(line => (
      line.split(" ").map(num => parseInt(num)) as any
    ))
  }) as Array<[destination: number, source: number, range: number][]>;

  // let count = 1;
  for (let i = 0; i < seedPairs.length; i+= 2) {
    for (let j = 0; j < seedPairs[i + 1]; j++) {
      seeds.push(seedPairs[i] + j);
      if (seeds.length > Math.pow(10, 7)) {
        // console.log(`Run epoch ${count++}`);
        res.push(epoch(seeds, maps));
        seeds = []
      }
    }
  }

  res.push(epoch(seeds, maps));

  return Math.min(...res);
}