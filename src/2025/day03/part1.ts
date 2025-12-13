export function part1(input: string) {
  return input
    .trim()
    .split('\n')
    .map(bank => {
      const digits = bank.split('').map(Number);
      const tens = Math.max(...digits.slice(0, -1));
      const idx = digits.indexOf(tens);
      const ones = Math.max(...digits.slice(idx + 1));
      return Number(`${tens}${ones}`);
    })
    .reduce((a, b) => a + b);
}
