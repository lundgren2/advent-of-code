function parseCols(input: string) {
  const rows = input
    .trim()
    .split('\n')
    .map(row => row.split(''));

  return Array.from({length: rows[0].length}, (_, i) => rows.map(r => r[i]));
}

export function part2(input: string) {
  const cols = parseCols(input);

  const groups = [];
  let group = [];

  // Group each column
  for (const col of cols) {
    const isSeparator = col.every(c => c === ' ');
    if (isSeparator) {
      groups.push(group);
      group = [];
    } else {
      group.push(col);
    }
  }
  // Last group doesn't have an empty column
  if (group.length) groups.push(group);

  return groups.reduce((acc, group) => {
    const op = group.map(col => col.at(-1)).find(c => c === '*' || c === '+')!;
    const nums = group.map(col => col.slice(0, -1).join('').trim()).map(Number);
    const sum =
      op === '*'
        ? nums.reduce((a, b) => a * b, 1)
        : nums.reduce((a, b) => a + b, 0);
    return acc + sum;
  }, 0);
}
