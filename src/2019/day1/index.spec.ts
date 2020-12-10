import {part1, part2} from '.';
import {readInput} from '../../utils';

describe('Advent of Code 2019 - Day 1', () => {
  describe('part 1', () => {
    it('should output 2 when mass is 12', () => {
      const input = [12];
      const output = part1(input);
      expect(output).toBe(2);
    });

    it('should output 2 when mass is 14', () => {
      const input = [14];
      const output = part1(input);
      expect(output).toBe(2);
    });

    it('should output 654 when mass is 1969', () => {
      const input = [1969];
      const output = part1(input);
      expect(output).toBe(654);
    });

    it('should output 33583 when mass is 100756', () => {
      const input = [100756];
      const output = part1(input);
      expect(output).toBe(33583);
    });

    it('should outout 3337766 when using input', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part1(input.split('\n').map(Number));
      expect(output).toBe(3337766);
    });
  });

  describe('part 2', () => {
    it('should output 2 when mass is 14', () => {
      const input = [14];
      const output = part2(input);
      expect(output).toBe(2);
    });

    it('should output 966 when mass is 1969', () => {
      const input = [1969];
      const output = part2(input);
      expect(output).toBe(966);
    });

    it('should output 50346 when mass is 100756', () => {
      const input = [100756];
      const output = part2(input);
      expect(output).toBe(50346);
    });

    it('should outout 5003788 when using input', async () => {
      const input = await readInput(__dirname + '/input');
      const output = part2(input.split('\n').map(Number));
      expect(output).toBe(5003788);
    });
  });
});
