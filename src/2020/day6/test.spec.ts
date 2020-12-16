import {part1} from './part1';
import {part2} from './part2';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 6', () => {
  let testInput: string;
  let input: string;
  beforeAll(async () => {
    testInput = await readInput(__dirname + '/test_input');
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 11 for test input', () => {
      expect(part1(testInput)).toBe(11);
    });

    it('should output 6161 from input', () => {
      expect(part1(input)).toBe(6161);
    });
  });

  describe('part 2', () => {
    it('should output 6 for test input', () => {
      expect(part2(testInput)).toBe(6);
    });

    it('should output 6161 from input', () => {
      expect(part2(input)).toBe(2971);
    });
  });
});
