import {part1} from './part1';
import {part2} from './part2';
import input from './input.txt';

describe('Advent of Code 2025 - Day 2', () => {
  const testInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

  describe('part 1', () => {
    test('should output correct from test input', () => {
      expect(part1(testInput)).toBe(1227775554);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(38310256125);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input (part2)', () => {
      expect(part2(testInput)).toBe(4174379265);
    });
    test('should output correct from input (part2)', () => {
      expect(part2(input)).toBe(-1);
    });
  });
});
