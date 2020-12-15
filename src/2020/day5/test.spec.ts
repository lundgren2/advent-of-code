import {part1} from './part1';
import {readInput} from '../../utils';
import {part2} from './part2';

describe('Advent of Code 2020 - Day 5', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

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

    it('should output 953 from input', () => {
      expect(part1(input)).toBe(953);
    });
  });
  describe('part 2', () => {
    it('should output your seat ID from input', () => {
      expect(part2(input)).toBe(615);
    });
  });
});
