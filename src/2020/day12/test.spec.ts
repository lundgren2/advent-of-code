import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2020 - Day 12', () => {
  let input: string;
  const testInput = `F10
N3
F7
R90
F11`;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 25 ', () => {
      expect(part1(testInput)).toBe(25);
    });

    it('should output 2280 from input', () => {
      expect(part1(input)).toBe(2280);
    });
  });
});
