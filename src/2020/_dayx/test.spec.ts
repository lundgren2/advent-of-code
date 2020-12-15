import {part1} from './part1';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day x', () => {
  describe('part 1', () => {
    it('should output x ', () => {
      const input = 'test';
      expect(part1(input)).toBe('test');
    });

    it('should output correct from input', async () => {
      const input = await readInput(__dirname + '/input');
      expect(part1(input)).toBe('test');
    });
  });
});
