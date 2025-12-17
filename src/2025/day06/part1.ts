function parseCols(input: string) {
  const rows = input
    .trim()
    .split('\n')
    .map(row => row.trim().split(' ').filter(Boolean));

  return Array.from({length: rows[0].length}, (_, i) => rows.map(r => r[i]));
}

export function part1(input: string) {
  return parseCols(input).reduce((acc, col) => {
    const op = col.at(-1);
    const values = col.slice(0, -1).map(Number);

    return op === '*'
      ? acc + values.reduce((acc, b) => acc * b, 1)
      : acc + values.reduce((acc, b) => acc + b, 0);
  }, 0);
}
