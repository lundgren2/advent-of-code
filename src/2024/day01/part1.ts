export function part1(input: string) {
  const rows = input.trim().split('\n');
  const left: number[] = [];
  const right: number[] = [];

  rows.forEach(row => {
    const [l, r] = row.split('   ').map(Number);
    left.push(l);
    right.push(r);
  });

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  return left.reduce((acc, val, i) => acc + Math.abs(val - right[i]), 0);
}
