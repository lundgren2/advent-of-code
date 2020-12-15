import {part1} from './part1';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 6', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 11 for test input', () => {
      const input = `abc

a
b
c

ab
ac

a
a
a
a

b
`;
      expect(part1(input)).toBe(11);
    });

    it('should output 6161 from input', () => {
      expect(part1(input)).toBe(6161);
    });
  });
});
