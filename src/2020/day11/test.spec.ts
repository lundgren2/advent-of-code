import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2020 - Day 11', () => {
  let input: string;
  let testInput: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
    testInput = await readInput(__dirname + '/test_input');
  });

  describe('part 1', () => {
    it('should output 37 ', () => {
      expect(part1(testInput)).toBe(37);
    });

    it('should output 2126 from input', () => {
      expect(part1(input)).toBe(2126);
    });
  });
});
