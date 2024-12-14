import input from './input.txt';
import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2024 - Day 3', () => {
  describe('part 1', () => {
    test('should output correct from test input', () => {
      const testInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
      expect(part1(testInput)).toBe(161);
    });
    test('should output correct from input', () => {
      expect(part1(input)).toBe(164730528);
    });
  });

  describe('part 2', () => {
    test('should output correct from test input part2', () => {
      const testInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
`;
      expect(part2(testInput)).toBe(48);
    });
    test('should output correct from input part2', () => {
      expect(part2(input)).toBe(70478672);
    });
  });
});
