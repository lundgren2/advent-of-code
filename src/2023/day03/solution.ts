const directions = [
  {dx: 0, dy: -1}, // Up
  {dx: 0, dy: 1}, // Down
  {dx: 1, dy: 0}, // Right
  {dx: -1, dy: 0}, // Left
  {dx: -1, dy: 1}, // Up-Right
  {dx: -1, dy: -1}, // Up-Left
  {dx: 1, dy: 1}, // Down-Right
  {dx: 1, dy: -1}, // Down-Left
];

function checkAdjacent(y: number, x: number, grid: string[][]) {
  return directions.some(({dx, dy}) => {
    const adjacentCell = grid[y + dy]?.[x + dx];
    return adjacentCell && /[^\d.]/.test(adjacentCell);
  });
}

export function part1(input: string) {
  const rows = input.split('\n');
  const numbers = rows.flatMap((row, i) => {
    return [...row.matchAll(/\d+/g)].map(n => ({
      x: n.index!,
      y: i,
      length: n[0].length,
      value: Number(n[0]),
    }));
  });

  const grid = rows.map(c => c.split(''));

  const partNumbers: number[] = [];
  for (const number of numbers) {
    const {x, y, length} = number;
    let match = false;
    Array.from({length}).forEach((_n, i) => {
      if (checkAdjacent(y, x + i, grid)) {
        if (!match) {
          match = true;
          partNumbers.push(number.value);
        }
      }
    });
  }

  return partNumbers.reduce((acc, val) => acc + val, 0);
}

export function part2() {}
