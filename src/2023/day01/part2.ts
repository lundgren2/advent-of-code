const digitMap = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
} as const;

const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

export function part2(input: string) {
  return input.split('\n').reduce((acc, line) => {
    const matches = [...line.matchAll(regex)].map(d => d[1]);
    const value = [matches[0], matches.at(-1)]
      .map(d => digitMap[d as keyof typeof digitMap] || d)
      .join('');

    return acc + Number(value);
  }, 0);
}
