import {part1} from './part1';

export const part2 = (input: string) => {
  const numbers = input.split('\n').map(Number);
  const sum = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    const measurements = numbers[i] + numbers[i + 1] + numbers[i + 2];
    sum.push(measurements);
  }
  return part1(sum.join('\n'));
};
