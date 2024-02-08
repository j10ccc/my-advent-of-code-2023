export default function day5_part1(input: string) {
  const [seedBlock, ...mapBlocks] = input.split("\n\n");
  const seeds = seedBlock.split(": ")[1].split(" ").map(num => parseInt(num));
  const maps = mapBlocks.map(block => {
    const [_, ...lines] = block.split("\n");

    return lines.map(line => (
      line.split(" ").map(num => parseInt(num)) as any
    ))
  }) as Array<[destination: number, source: number, range: number][]>;

  const res = seeds.map(seed => {
    return maps.reduce((prev, map) => {
      const tmp = map.find(item => {
        return prev >= item[1] && ((prev - item[1]) < item[2])
      })
      const dest = tmp === undefined ? prev : tmp[0] + (prev - tmp[1]);
      return dest;
    }, seed)
  })

  return Math.min(...res);
}