import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 6', () => {
  const testInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;
  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(4277556);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(7098065460541);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(3263827);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(13807151830618);
    });
  });
});
