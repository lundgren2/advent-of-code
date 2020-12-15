import {part1} from './part1';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 5', () => {
  describe('utils', () => {});

  describe('part 1', () => {
    it('should output 357 for FBFBBFFRLR', () => {
      const input = 'FBFBBFFRLR';
      expect(part1(input)).toBe(357);
    });

    it(`should output 567 for 'BFFFBBFRRR'`, () => {
      const input = 'BFFFBBFRRR';
      expect(part1(input)).toBe(567);
    });

    it(`should output 119 for 'FFFBBBFRRR'`, () => {
      const input = 'FFFBBBFRRR';
      expect(part1(input)).toBe(119);
    });

    it(`should output 820 for 'BBFFBBFRLL'`, () => {
      const input = 'BBFFBBFRLL';
      expect(part1(input)).toBe(820);
    });

    it('should output 953 from input', async () => {
      const input = await readInput(__dirname + '/input');
      expect(part1(input)).toBe(953);
    });
  });
});
