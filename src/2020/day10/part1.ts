export const part1 = (input: string) => {
  const joltage = [0, ...input.split('\n')].map(Number).sort((a, b) => a - b);

  let oneDiff = 0;
  let threeDiff = 1; // 3 higher than the highest-rated adapter.

  joltage.forEach((current, i) => {
    const diff = joltage[i + 1] - current;
    if (diff === 1) oneDiff++;
    else if (diff === 3) threeDiff++;
  });

  return oneDiff * threeDiff;
};
