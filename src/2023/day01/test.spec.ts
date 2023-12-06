import input from './input.txt';
import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2023 - Day 1', () => {
  describe('part 1', () => {
    test('should output 142', () => {
      const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
      expect(part1(testInput)).toBe(142);
    });

    test('should output correct from input', () => {
      expect(part1(input)).toBe(54331);
    });
  });

  describe('part 2', () => {
    test('should output 281', () => {
      const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
      expect(part2(testInput)).toBe(281);
    });

    test('should output correct from input', () => {
      expect(part2(input)).toBe(54518);
    });
  });
});
