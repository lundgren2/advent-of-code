const binaryToDecimal = (binary: string): number => parseInt(binary, 2);

export const part1 = (input: string) => {
  const matrix = input.split('\n').map(row => row.split(''));
  let countZeros = 0;
  let countOnes = 0;
  const gammaRate = [];
  const epsilonRate = [];

  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] == '0') {
        countZeros++;
      } else {
        countOnes++;
      }
    }

    if (countZeros > countOnes) {
      gammaRate.push(0);
      epsilonRate.push(1);
    } else {
      gammaRate.push(1);
      epsilonRate.push(0);
    }
    // Reset counters
    countZeros = 0;
    countOnes = 0;
  }

  const gamma = binaryToDecimal(gammaRate.join(''));
  const epsilon = binaryToDecimal(epsilonRate.join(''));
  return gamma * epsilon;
};
