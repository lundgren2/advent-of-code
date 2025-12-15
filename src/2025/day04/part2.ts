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

function checkAdjecent(x: number, y: number, grid: string[][]) {
  let hits = 0;
  for (const {dx, dy} of directions) {
    if (grid[y + dy]?.[x + dx] === '@') hits++;
    if (hits > 3) return false;
  }
  return true;
}

export function part2(input: string) {
  const grid = input.split('\n').map(r => r.split(''));
  const ySize = grid.length;
  const xSize = grid[0].length;
  let count = 0;
  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      const current = grid[y][x];
      if (current === '@') {
        if (checkAdjecent(x, y, grid)) {
          // Remove paper roll and re run
          grid[y][x] = '.';
          y = 0;
          x = 0;
          count++;
        }
      }
    }
  }
  return count;
}
