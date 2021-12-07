import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2021 - Day 1', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    test('should output 7', () => {
      const test_input = `199
200
208
210
200
207
240
269
260
263
`;
      expect(part1(test_input)).toBe(7);
    });

    test('should output correct from input', () => {
      expect(part1(input)).toBe(1195);
    });
  });

  describe('part 2', () => {
    test('should output 5', () => {
      const test_input = `199
      200
      208
      210
      200
      207
      240
      269
      260
      263
      `;
      expect(part2(test_input)).toBe(5);
    });

    test('should output correct input', () => {
      expect(part2(input)).toBe(1235);
    });
  });
});
