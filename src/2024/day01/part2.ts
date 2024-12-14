export function part2(input: string) {
  const rows = input.trim().split('\n');

  const [left, right] = rows.reduce<[number[], number[]]>(
    (acc, val) => {
      const [l, r] = val.split('   ').map(Number);
      acc[0].push(l);
      acc[1].push(r);
      return acc;
    },
    [[], []]
  );

  return left.reduce((acc, val) => {
    const occurring = right.filter(a => a === val).length;
    return occurring * val + acc;
  }, 0);
}
