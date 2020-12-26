export const part1 = (input: string) => {
  return input
    .split('\n\n')
    .reduce((a, b) => a + new Set(b.replace(/(\n|\r)/g, '')).size, 0);
};
