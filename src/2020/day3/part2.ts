import {part1} from './part1';

export const part2 = (input: string, xSteps: number[], ySteps: number[]) => {
  const encounteredTrees = [];

  for (let step = 0; step < xSteps.length; step++) {
    const numberOfTrees = part1(input, xSteps[step], ySteps[step]);
    encounteredTrees.push(numberOfTrees);
  }

  // multiply together the number of trees encountered.
  return encounteredTrees.reduce((sum, currentTrees) => sum * currentTrees, 1);
};
