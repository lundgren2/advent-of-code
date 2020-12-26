const countDistinctWays = (input: number[]) => {
  const lastIndex = input.length - 1;
  const distinctWays = input.reduce(
    (distinctWays, adapter, i) => {
      // Compare current adapter with the three next neighbours and
      // check if the joltage difference less or equal to three.
      for (let j = i + 1; j < i + 4; j++) {
        if (input[j] - adapter <= 3) {
          distinctWays[j] += distinctWays[i];
        }
      }
      return distinctWays;
    },
    [1, ...Array(lastIndex).fill(0)] // First is always valid
  );
  return distinctWays[lastIndex];
};

export const part2 = (input: string) => {
  const adapters = [0, ...input.split('\n')].map(Number).sort((a, b) => a - b);
  adapters.push(adapters[adapters.length - 1] + 3); // 3 higher than the highest-rated adapter.

  return countDistinctWays(adapters);
};
