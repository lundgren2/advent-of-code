export const part1 = (input: string) => {
  const numbers = input.split('\n').map(Number);
  return numbers.reduce((a, b, i) => (b < numbers[i + 1] ? a + 1 : a), 0);
};
