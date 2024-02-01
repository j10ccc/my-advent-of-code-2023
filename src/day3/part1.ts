function getNumber(index: number, context: string): [value: number, pos: number] {
  let left = index;
  let right = index;
  let pos = index;
  let str = context[index];

  while(left > 0) {
    left--;
    if (isDigit(context[left])) {
      str = context[left] + str;
    } else {
      pos = left + 1;
      break;
    }
  }

  while(right < context.length - 1) {
    right++;
    if (isDigit(context[right])) {
      str = str + context[right];
    } else {
      break;
    }
  }

  return [parseInt(str), pos];
}

function isDigit(char: string) {
  if (char <= "9" && char >= "0") return true;
  // if (char === "-") return true;

  return false;
}

function isSymbol(char: string) {
  if (char <= "9" && char >= "0") return false;
  if (char === ".") return false;
  if (char === "\n") return false;
  // if (char === "-") return false;

  return true;
}

export default function day3_part1(input: string) {
  const lines = input.split("\n");
  const context = input;
  const width = lines[0].length + 1;
  let sum = 0;
  const map = new Map<number, number>();

  for (let i = 0; i < context.length; i++) {
    const char = context[i];
    if (isSymbol(char)) {
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
    }
  }

  for (const value of map.values()) {
    sum += value;
  }

  return sum;
}