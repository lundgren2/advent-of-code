import {expect, describe, beforeAll, it} from 'bun:test';
import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2021 - Day x', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output x ', () => {
      const test_input = 'test';
      expect(part1(test_input)).toBe('test');
    });

    it('should output correct from input', () => {
      expect(part1(input)).toBe('test');
    });
  });
});
