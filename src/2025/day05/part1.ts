function idInRange(id: number, range: number[]) {
  return id >= range[0] && id <= range[1];
}

export function part1(input: string) {
  const [validIds, ids] = input.split('\n\n').map(a => a.split('\n'));
  const freshIds = new Set<number>();

  const parsedRanges = validIds.map(item => item.split('-').map(Number));

  ids.map(Number).forEach(id => {
    if (parsedRanges.some(range => idInRange(id, range))) {
      freshIds.add(id);
    }
  });

  return freshIds.size;
}
