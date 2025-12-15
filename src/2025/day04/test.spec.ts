import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 4', () => {
  const testInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;
  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(13);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(1437);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(43);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(8765);
    });
  });
});
