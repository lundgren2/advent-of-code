export const part1 = (input: string) => {
  return input
    .split('\n\n')
    .map(a => [...new Set(a.split(/\n|\s/).join(''))].length)
    .reduce((a, b) => a + b);
};
