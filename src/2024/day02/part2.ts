// The levels are either all increasing or all decreasing.
const isIncreasingOrDecreasing = (report: number[]) => {
  const arraysEqual = (a: number[]) =>
    JSON.stringify(a) === JSON.stringify(report);
  const sortedAsc = [...report].sort((a, b) => a - b);
  const sortedDesc = [...report].sort((a, b) => b - a);
  return arraysEqual(sortedAsc) || arraysEqual(sortedDesc);
};

// Any two adjacent levels differ by at least one and at most three.
const differBetweenOneAndThree = (report: number[]) =>
  report.every((_, i, arr) => {
    if (i === 0) return true;
    const diff = Math.abs(arr[i - 1] - arr[i]);
    return diff >= 1 && diff <= 3;
  });

const checkReport = (report: number[]) =>
  isIncreasingOrDecreasing(report) && differBetweenOneAndThree(report);

// Problem Dampener - tolerate a single bad level
const problemDampener = (report: number[]) => {
  if (checkReport(report)) return true;
  return report.some((_item, index) => {
    // Remove one level from the report
    return checkReport(report.filter((_item, i) => i !== index));
  });
};

export function part2(input: string): number {
  return input
    .trim()
    .split('\n')
    .map(level => level.split(' ').map(Number))
    .filter(problemDampener).length;
}
