const isInvalidSequence = (id: string) => /^(\d+)\1+$/.test(id);

function isInvalidId(id: number) {
  const str = id.toString();
  const first = str.slice(0, str.length / 2);
  const last = str.slice(str.length / 2);
  return first === last || isInvalidSequence(str);
}

export function part2(input: string) {
  const ranges = input.trimEnd().split(',');
  const invalidIds = [];

  for (const range of ranges) {
    const [start, end] = range.split('-').map(Number);
    for (let i = start; i <= end; i++) {
      if (isInvalidId(i)) invalidIds.push(i);
    }
  }

  return invalidIds.reduce((acc, curr) => acc + curr);
}
