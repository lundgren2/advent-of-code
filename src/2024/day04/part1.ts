const VALID_CHARS = ['X', 'M', 'A', 'S'];

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

export function part1(input: string) {
  const grid = input.split('\n').map(c => c.split(''));

  const checkDirections = (x: number, y: number, dx: number, dy: number) => {
    for (let step = 1; step < VALID_CHARS.length; step++) {
      const current = grid[x + dx * step]?.[y + dy * step];
      if (current !== VALID_CHARS[step]) return false;
    }
    return true;
  };

  let count = 0;
  for (let x = 0; x < grid.length; x++) {
    const row = grid[x];
    console.log(row);
    for (let y = 0; y < grid[x].length; y++) {
      const current = grid[x][y];
      if (current === 'X') {
        for (const {dx, dy} of directions) {
          if (checkDirections(x, y, dx, dy)) {
            count++;
          }
        }
      }
    }
  }
  return count;
}
