export function part2(input: string) {
  const str = input.trim();
  let enable = true;
  let result = 0;

  Array.from(str).forEach((_char, i) => {
    const remaining = str.slice(i);
    if (remaining.startsWith('do()')) enable = true;
    if (remaining.startsWith(`don't()`)) enable = false;
    const maybeMatch = remaining.match(/^mul\((\d{1,3}),(\d{1,3})\)/);
    if (maybeMatch && enable) {
      result += Number(maybeMatch[1]) * Number(maybeMatch[2]);
    }
  });

  return result;
}
