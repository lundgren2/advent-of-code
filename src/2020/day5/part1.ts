const calculateBSP = (sequence: string) => {
  let low = 0;
  let high = sequence.length > 3 ? 127 : 7; // rows or columns

  const binarySequence = [...sequence].map(c => c === 'F' || c === 'L'); // replace with 1 or 0
  for (const char of binarySequence) {
    const half = (high - low) / 2;
    char ? (high -= Math.floor(half)) : (low += Math.ceil(half));
  }
  return low;
};

export const calculateSeatIds = (input: string) => {
  return input.split('\n').map(boardingPass => {
    const rowSequence = boardingPass.slice(0, 7);
    const columnSequence = boardingPass.slice(7, 10);
    const row = calculateBSP(rowSequence);
    const column = calculateBSP(columnSequence);
    return row * 8 + column;
  });
};

export const part1 = (input: string) => Math.max(...calculateSeatIds(input));
