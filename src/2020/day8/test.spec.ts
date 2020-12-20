import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2020 - Day 8', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 5 of test input ', () => {
      const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
      expect(part1(input)).toBe(5);
    });

    it('should output 1548 from input', () => {
      expect(part1(input)).toBe(1548);
    });
  });
});
