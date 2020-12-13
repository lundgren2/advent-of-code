export const part1 = (input: string, xSteps: number, ySteps: number) => {
  const map = input.split('\n').map(x => x.split(''));
  let numberOfTrees = 0;

  let x = xSteps;
  let y = ySteps;
  const mapWidth = map[0].length - 1;

  while (y < map.length) {
    if (map[y][x] === '#') numberOfTrees++;

    // next step
    const nextX = x + xSteps;
    x = nextX > mapWidth ? nextX - (mapWidth + 1) : nextX;
    y += ySteps;
  }

  return numberOfTrees;
};
