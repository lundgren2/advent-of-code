function parseRange(range: string): [start: number, end: number] {
  const [start, end] = range.split('-', 2).map(Number);
  return [start, end];
}

export function part2(input: string) {
  const [validIds] = input.split('\n\n');

  // Sort and parse range to [[start, end]...]
  const ranges = validIds
    .split('\n')
    .map(parseRange)
    .sort((a, b) => a[0] - b[0]);

  const filteredRange: [number, number][] = [];

  // Filter range to exclude overlaps
  for (const [start, end] of ranges) {
    const last = filteredRange.at(-1);

    // Check if first of new range
    if (!last || last[1] + 1 < start) {
      filteredRange.push([start, end]);
    } else {
      // Increase end range
      last[1] = Math.max(last[1], end);
    }
  }

  return filteredRange.reduce((sum, [s, e]) => sum + (e - s + 1), 0);
}
