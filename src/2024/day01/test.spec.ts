import input from './input.txt';
import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2024 - Day 1', () => {
  describe('part 1', () => {
    test('should output 11', () => {
      const testInput = `3   4
4   3
2   5
1   3
3   9
3   3`;
      expect(part1(testInput)).toBe(11);
    });

    test('should output correct from input', () => {
      expect(part1(input)).toBe(1938424);
    });
  });

  describe('part 2', () => {
    test('should output 31', () => {
      const testInput = `3   4
4   3
2   5
1   3
3   9
3   3
`;
      expect(part2(testInput)).toBe(31);
    });

    test('should output correct from input', () => {
      expect(part2(input)).toBe(22014209);
    });
  });
});
