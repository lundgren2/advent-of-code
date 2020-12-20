import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2020 - Day 9', () => {
  let input: string;
  const testInput = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 127', () => {
      expect(part1(testInput, 5)).toBe(127);
    });

    it('should output 50047984 from input', () => {
      expect(part1(input, 25)).toBe(50047984);
    });
  });
});
