const binaryToDecimal = (binary: string): number => parseInt(binary, 2);

export const part2 = (input: string) => {
  const matrix = input.split('\n').map(row => row.split(''));
  let countZeros = 0;
  let countOnes = 0;
  const gammaRate = [];
  const epsilonRate = [];
  const oxygenRateIdx = [];
  let filteredMatrix = matrix;

  for (let x = 0; x < filteredMatrix[0].length; x++) {
    for (let y = 0; y < filteredMatrix.length; y++) {
      if (filteredMatrix[y][x] === '0') {
        countZeros++;
      } else {
        countOnes++;
      }
    }

    if (countZeros > countOnes) {
      gammaRate.push(0);
      epsilonRate.push(1);
      filteredMatrix = filteredMatrix.filter(row => row[x] === '0');
      console.log(filteredMatrix);
    } else {
      gammaRate.push(1);
      epsilonRate.push(0);
      filteredMatrix = filteredMatrix.filter(row => row[x] === '1');
      console.log(filteredMatrix);
    }
    // Reset counters
    countZeros = 0;
    countOnes = 0;
  }

  const gamma = binaryToDecimal(gammaRate.join(''));
  const epsilon = binaryToDecimal(epsilonRate.join(''));
  return gamma * epsilon;
};
