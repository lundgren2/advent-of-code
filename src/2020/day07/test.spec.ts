import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2020 - Day 7', () => {
  let testInput: string;
  let testInput2: string;
  let input: string;

  beforeAll(async () => {
    testInput = await readInput(__dirname + '/test_input');
    testInput2 = await readInput(__dirname + '/test_input_2');
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

  describe('part 2', () => {
    it('should output 32 from test_input', () => {
      expect(part2(testInput)).toBe(32);
    });

    it('should output 126 from test_input2', () => {
      expect(part2(testInput2)).toBe(126);
    });

    it('should output 30055 valid bags from input', () => {
      expect(part2(input)).toBe(30055);
    });
  });
});
