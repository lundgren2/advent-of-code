import {part1} from './part1';

export const part2 = (input: string, preamble: number) => {
  const inputNumbers = input.split('\n').map(Number);
  const invalidNumber = part1(input, preamble)!;
  const contiguousNumbers = [];

  let accumulator = 0;
  for (const current of inputNumbers) {
    accumulator = contiguousNumbers.reduce((a, b) => a + b, 0);

    if (accumulator === invalidNumber) {
      return Math.min(...contiguousNumbers) + Math.max(...contiguousNumbers);
    }

    // Make room for current number
    while (accumulator + current > invalidNumber) {
      accumulator -= contiguousNumbers.shift()!;
    }

    contiguousNumbers.push(current);
  }
};
