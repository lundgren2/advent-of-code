import {part1} from './part1';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 7', () => {
  let testInput: string;
  let input: string;
  beforeAll(async () => {
    testInput = await readInput(__dirname + '/test_input');
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 4', () => {
      expect(part1(testInput)).toBe(4);
    });

    it('should output 289 valid bags from input', () => {
      expect(part1(input)).toBe(289);
    });
  });
});
