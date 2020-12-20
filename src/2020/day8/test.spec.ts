import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2020 - Day 8', () => {
  let input: string;
  const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 5 of test input ', () => {
      expect(part1(testInput)).toBe(5);
    });

    it('should output 1548 from input', () => {
      expect(part1(input)).toBe(1548);
    });
  });
  describe('part 2', () => {
    it('should output 8 of test input ', () => {
      expect(part2(testInput)).toBe(8);
    });

    it('should output 1375 from input', () => {
      const output = part2(input);
      expect(part2(input)).toBe(1375);
    });
  });
});
