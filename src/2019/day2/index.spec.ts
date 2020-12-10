import {part1, part2} from '.';
import {readInput} from '../../utils';

describe('Advent of Code 2019 - Day 2', () => {
  describe('part 1', () => {
    it('should output 2,0,0,0,99', () => {
      const input = [1, 0, 0, 0, 99];
      const output = part1(input);
      expect(output).toStrictEqual([2, 0, 0, 0, 99]);
    });

    it('should output 2,3,0,6,99', () => {
      const input = [2, 3, 0, 3, 99];
      const output = part1(input);
      expect(output).toStrictEqual([2, 3, 0, 6, 99]);
    });

    it('should output 2,4,4,5,99,9801', () => {
      const input = [2, 4, 4, 5, 99, 0];
      const output = part1(input);
      expect(output).toStrictEqual([2, 4, 4, 5, 99, 9801]);
    });

    it('should output 30,1,1,4,2,5,6,0,99', () => {
      const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
      const output = part1(input);
      expect(output).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
    });

    it('should output 4484226 at index 0', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part1(input.split(',').map(Number), true);
      expect(output[0]).toStrictEqual(4484226);
    });
  });

  describe('part 2', () => {
    it('should output 5696 when 100*noun+verb', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part2(input.split(',').map(Number));
      expect(output).toBe(5696);
    });
  });
});
