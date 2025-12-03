import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 1', () => {
  const testInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;
  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(3);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(997);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(6);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(5978);
    });
  });
});
