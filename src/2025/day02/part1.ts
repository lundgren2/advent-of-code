const getStartEnd = (range: string) => range.split('-').map(Number);

export function part1(input: string) {
  const ranges = input.trimEnd().split(',');
  const invalidIDs = [];

  for (const range of ranges) {
    const [start, end] = getStartEnd(range);
    for (let i = start; i <= end; i++) {
      const id = i.toString();
      const first = id.slice(0, id.length / 2);
      const last = id.slice(id.length / 2);
      if (first === last) invalidIDs.push(i);
    }
  }

  return invalidIDs.reduce((acc, curr) => acc + curr);
}
