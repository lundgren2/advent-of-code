import {part1} from '.';
import {readInput} from '../../utils';

describe('Advent of Code 2020 - Day x', () => {
  describe('part 1', () => {
    it('should output x ', () => {
      const input = `test`;
      const output = part1(input);
      expect(output).toBe('test');
    });

    it('should output correct from input', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part1(input);
      expect(output).toBe('test');
    });
  });
});
