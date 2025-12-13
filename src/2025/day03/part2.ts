function findMaxJoltage(bank: string, n = 12): string {
  const batteries = bank.split('');
  let start = 0;
  const maxJoltage = [];

  for (let pick = 0; pick < n; pick++) {
    const end = batteries.length - (n - pick);

    let max = batteries[start];
    let maxIdx = start;

    // Pick max from [start..end]
    for (let i = start; i <= end; i++) {
      const next = batteries[i];
      if (max < next) {
        max = next;
        maxIdx = i;
        if (max === '9') break;
      }
    }

    maxJoltage.push(max);
    // Set start to next battery after max
    start = maxIdx + 1;
  }

  return maxJoltage.join('');
}

export function part2(input: string) {
  return input
    .trim()
    .split('\n')
    .map(bank => BigInt(findMaxJoltage(bank, 12)))
    .reduce((a, b) => a + b);
}
