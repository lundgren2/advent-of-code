import {readInput} from '../../utils';

import {part1} from './part1';

describe('Advent of Code 2020 - Day 10', () => {
  let input: string;
  const testInput = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output 7*5', () => {
      const input = `16
10
15
5
1
11
7
19
6
12
4`;
      expect(part1(input)).toBe(7 * 5);
    });
    it('should output 22*10 ', () => {
      expect(part1(testInput)).toBe(22 * 10);
    });

    it('should output 2112 from input', () => {
      expect(part1(input)).toBe(2112);
    });
  });
});
