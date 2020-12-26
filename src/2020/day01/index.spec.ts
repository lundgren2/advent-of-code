import {part1, part2} from './index';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day 1', () => {
  describe('part 1', () => {
    it('should output 514579', () => {
      const input = [1721, 979, 366, 299, 675, 1456];
      const output = part1(input);
      expect(output).toBe(514579);
    });

    it('should output 926464', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part1(input.split('\n').map(Number));
      expect(output).toBe(926464);
    });
  });

  describe('part 2', () => {
    it('should output 241861950', () => {
      const input = [1721, 979, 366, 299, 675, 1456];
      const output = part2(input);
      expect(output).toBe(241861950);
    });

    it('should output 926464', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part2(input.split('\n').map(Number));
      expect(output).toBe(65656536);
    });
  });
});
