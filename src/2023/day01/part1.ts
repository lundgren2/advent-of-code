export function part1(input: string): number {
  return input.split('\n').reduce((acc, line) => {
    const digits = line.match(/\d/g)!;
    return acc + Number(digits[0] + digits.at(-1));
  }, 0);
}
