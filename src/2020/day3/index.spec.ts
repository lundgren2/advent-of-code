import {part1} from '.';
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
});
