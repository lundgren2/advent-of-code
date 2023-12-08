export function part1(input: string): number {
  const maxCubes = {red: 12, green: 13, blue: 14} as const;
  const games = input.split('\n');

  const validGames = games.map((game, i) => {
    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    const subsets = game.split(': ')[1].split('; ');
    const rounds = subsets.map(subset => {
      // 3 blue, 4 red
      const sets = subset.split(', ');
      return sets.map(set => {
        const [amount, color] = set.split(' ');
        return Number(amount) <= maxCubes[color as keyof typeof maxCubes];
      });
    });

    return !rounds.flat().includes(false);
  });

  // [ true, true, false, false, true ]
  return validGames.reduce((acc, val, i) => (val ? acc + (i + 1) : acc), 0);
}

export function part2(input: string): number {
  const games = input.split('\n');

  const validGames = games.map((game, i) => {
    const maxCubes = {red: 0, green: 0, blue: 0};
    const subsets = game.split(': ')[1].split('; ');

    subsets.forEach(subset => {
      const sets = subset.split(', ');
      return sets.map(set => {
        const [amount, color] = set.split(' ');
        const currentMax = maxCubes[color as keyof typeof maxCubes];
        if (Number(amount) > currentMax) {
          maxCubes[color as keyof typeof maxCubes] = Number(amount);
        }
      });
    });

    return maxCubes.red * maxCubes.green * maxCubes.blue;
  });

  const result = validGames.reduce((acc, val) => acc + val, 0);
  return result;
}
