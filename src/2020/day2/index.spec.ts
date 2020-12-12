import {part1, part2} from '.';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 2', () => {
  describe('part 1', () => {
    it('should output 2 since there is two valid passwords', () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      const output = part1(input);
      expect(output).toBe(2);
    });

    it('should output correct amount of valid passwords from input', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part1(input);
      expect(output).toBe(474);
    });
  });
  describe('part 2', () => {
    it('should return 1 valid password', () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
      const output = part2(input);
      expect(output).toBe(1);
    });

    it('should return correct amount of valid passwords from input', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part2(input);
      expect(output).toBe(745);
    });
  });
});
