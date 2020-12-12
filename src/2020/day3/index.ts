export const part1 = (input: string, xSteps: number, ySteps: number) => {
  const map = input.split('\n').map(x => x.split(''));
  let treeCounter = 0;

  // start position [0,0]
  let xCoordinate = xSteps;
  let yCoordinate = ySteps;
  const mapWidth = map[0].length - 1;
  const mapHeight = input.split('\n').length - 1;
  // console.log(`map size: ${mapWidth}x${mapHeight}`);

  while (yCoordinate <= mapHeight) {
    const current = map[yCoordinate][xCoordinate];
    // console.log(`${current} at [${xCoordinate}, ${yCoordinate}]`);
    if (current === '#') treeCounter++;

    // next step
    const nextXCoordinate = xCoordinate + xSteps;
    xCoordinate =
      nextXCoordinate > mapWidth
        ? nextXCoordinate - (mapWidth + 1)
        : nextXCoordinate;
    yCoordinate += ySteps;
  }

  return treeCounter;
};
