import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2024 - Day x', () => {
  describe('part 1', () => {
    test('should output correct from test input', () => {
      const testInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
      expect(part1(testInput)).toBe(18);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(2447);
    });
  });

  describe.skip('part 2', () => {
    test('should output correct from test input (part2)', () => {
      const testInput = `test`;
      expect(part2(testInput)).toBe(-1);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(-1);
    });
  });
});
