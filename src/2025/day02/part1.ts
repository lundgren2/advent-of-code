const getStartEnd = (range: string) => range.split('-').map(Number);

export function part1(input: string) {
  const ranges = input.trimEnd().split(',');
  const invalidIds = [];

  for (const range of ranges) {
    const [start, end] = getStartEnd(range);
    for (let i = start; i <= end; i++) {
      const id = i.toString();
      const first = id.slice(0, id.length / 2);
      const last = id.slice(id.length / 2);
      if (first === last) invalidIds.push(i);
    }
  }

  return invalidIds.reduce((acc, curr) => acc + curr);
}
