import example from './example.txt';
import input from './input.txt';
import {part1} from './solution';

describe('Advent of Code 2023 - Day 2', () => {
  describe('part 1', () => {
    test('test round', () => {
      expect(part1(example)).toBe(8);
    });
    test('solution', () => {
      expect(part1(input)).toBe(2685);
    });
  });
});
