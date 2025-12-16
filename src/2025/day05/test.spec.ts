import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 5', () => {
  const testInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;
  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(3);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(613);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(14);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(336495597913098);
    });
  });
});
