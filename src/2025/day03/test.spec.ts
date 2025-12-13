import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 3', () => {
  const testInput = `987654321111111
811111111111119
234234234234278
818181911112111`;
  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(357);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(17107);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(3121910778619n);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(169349762274117n);
    });
  });
});
