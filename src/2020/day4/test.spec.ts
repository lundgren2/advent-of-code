import {part1} from './part1';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 4', () => {
  describe('part 1', () => {
    it('should output 2 valid passports ', async () => {
      const input = await readInput(__dirname + '/test_input');
      expect(part1(input)).toBe(2);
    });

    it('should output 230 valid passports from input', async () => {
      const input = await readInput(__dirname + '/input');
      expect(part1(input)).toBe(230);
    });
  });
});
