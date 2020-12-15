import {calculateSeatIds} from './part1';

export const part2 = (input: string) => {
  const seats = calculateSeatIds(input);
  for (let i = 0; i < seats.length; i++) {
    if (!seats.includes(i) && seats.includes(i + 1) && seats.includes(i - 1)) {
      return i;
    }
  }
};
