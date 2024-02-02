import { isSymbol, getNumber, isDigit } from "./part1";

export default function day3_part1(input: string) {
  const lines = input.split("\n");
  const context = input;
  const width = lines[0].length + 1;
  let sum = 0;

  for (let i = 0; i < context.length; i++) {
    const char = context[i];
    if (isSymbol(char)) {
      const map = new Map<number, number>();
      if (isDigit(context[i - width])) {
        const [value, id] = getNumber(i - width, context);
        map.set(id, value);
      } else {
        if (isDigit(context[i - width - 1])) {
          const [value, id] = getNumber(i - width - 1, context);
          map.set(id, value);
        }
        if (isDigit(context[i - width + 1])) {
          const [value, id] = getNumber(i - width + 1, context);
          map.set(id, value);
        }
      }

      if (isDigit(context[i - 1])) {
        const [value, id] = getNumber(i - 1, context);
        map.set(id, value);
      }
      if (isDigit(context[i + 1])) {
        const [value, id] = getNumber(i + 1, context);
        map.set(id, value);
      }

      if (isDigit(context[i + width])) {
        const [value, id] = getNumber(i + width, context);
        map.set(id, value);
      } else {
        if (isDigit(context[i + width - 1])) {
          const [value, id] = getNumber(i + width - 1, context);
          map.set(id, value);
        }
        if (isDigit(context[i + width + 1])) {
          const [value, id] = getNumber(i + width + 1, context);
          map.set(id, value);
        }
      }

      if (map.size === 2) {
        let tmp = 1;
        for (const value of map.values()) {
          tmp *= value;
        }
        sum += tmp;
      }
    }
  }

  return sum;
}