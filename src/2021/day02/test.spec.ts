import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2021 - Day 2', () => {
  let input: string;
  const test_input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 150 ', () => {
      expect(part1(test_input)).toBe(150);
    });

    it('should output correct from input', () => {
      expect(part1(input)).toBe(1947824);
    });
  });

  describe('part 2', () => {
    it('should output correct from input', () => {
      expect(part2(test_input)).toBe(900);
    });

    it('should output correct from input', () => {
      expect(part2(input)).toBe(1813062561);
    });
  });
});
