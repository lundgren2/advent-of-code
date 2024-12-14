import input from './input.txt';
import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2024 - Day 2', () => {
  describe('part 1', () => {
    test('should output correct from test input', () => {
      const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
      expect(part1(testInput)).toBe(2);
    });

    test('should output correct from input part1', () => {
      expect(part1(input)).toBe(483);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input part2', () => {
      const testInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
      expect(part2(testInput)).toBe(4);
    });

    test('should output correct from input', () => {
      expect(part2(input)).toBe(528);
    });
  });
});
