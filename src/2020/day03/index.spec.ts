import {part1} from './part1';
import {part2} from './part2';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 3', () => {
  describe('part 1', () => {
    it('should output 7 trees ', async () => {
      const input = await readInput(__dirname + '/testinput');
      expect(part1(input, 3, 1)).toBe(7);
    });

    it('should output 265 trees with real input ', async () => {
      const input = await readInput(__dirname + '/input');
      expect(part1(input, 3, 1)).toBe(265);
    });
  });

  describe('part 2', () => {
    it('should produce answer 336 ', async () => {
      const input = await readInput(__dirname + '/testinput');
      const xSteps = [1, 3, 5, 7, 1];
      const ySteps = [1, 1, 1, 1, 2];
      expect(part2(input, xSteps, ySteps)).toBe(336);
    });

    it('should output 265 trees with real input ', async () => {
      const input = await readInput(__dirname + '/input');
      const xSteps = [1, 3, 5, 7, 1];
      const ySteps = [1, 1, 1, 1, 2];
      expect(part2(input, xSteps, ySteps)).toBe(3154761400);
    });
  });
});
