import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe.only('Advent of Code 2021 - Day 3', () => {
  let input: string;
  const test_input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 198', () => {
      expect(part1(test_input)).toBe(198);
    });

    it('should output correct from input', () => {
      expect(part1(input)).toBe(2583164);
    });
  });

  describe.only('part 2', () => {
    it('should output correct from input', () => {
      expect(part2(test_input)).toBe(230);
    });
  });
});
