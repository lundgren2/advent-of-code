import example from './example.txt';
import input from './input.txt';
import {part1, part2} from './solution';

describe('Advent of Code 2023 - Day 3', () => {
  describe('part 1', () => {
    test('test round', () => {
      expect(part1(example)).toBe(4361);
    });
    test('solution', () => {
      expect(part1(input)).toBe(532428);
    });
  });

  // describe('part 2', () => {
  //   test('test round', () => {
  //     expect(part2(example)).toBe(2286);
  //   });
  //   test('solution', () => {
  //     expect(part2(input)).toBe(83707);
  //   });
  // });
});
