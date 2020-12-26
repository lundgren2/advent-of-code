import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2020 - Day 10', () => {
  let input: string;
  let testInput: string;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
    testInput = await readInput(__dirname + '/test_input');
  });

  describe('part 1', () => {
    it('should output 7*5', () => {
      const input = `16
10
15
5
1
11
7
19
6
12
4`;
      expect(part1(input)).toBe(7 * 5);
    });
    it('should output 22*10 ', () => {
      expect(part1(testInput)).toBe(22 * 10);
    });

    it('should output 2112 from input', () => {
      expect(part1(input)).toBe(2112);
    });
  });

  describe('part 2', () => {
    it('should output 8', () => {
      const input = `16
10
15
5
1
11
7
19
6
12
4`;
      expect(part2(input)).toBe(8);
    });

    it('should output 19208 ', () => {
      expect(part2(testInput)).toBe(19208);
    });

    it('should output 3022415986688 from input', () => {
      expect(part2(input)).toBe(3022415986688);
    });
  });
});
