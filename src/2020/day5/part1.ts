const calculateBSP = (
  sequence: string,
  low: number,
  high: number,
  lowerHalfChar: string,
  upperHalfChar: string
) => {
  for (const char of sequence) {
    const half = (high - low) / 2;
    if (char === lowerHalfChar) {
      high = Math.floor(high - half);
    } else if (char === upperHalfChar) {
      low = Math.ceil(low + half);
    } else {
      throw new TypeError(`Invalid characher ${char}`);
    }
  }
  return low;
};

export const part1 = (input: string) => {
  const seatIds = input.split('\n').map(boardingPass => {
    // FBFBBFFRLR
    const rowSequence = boardingPass.slice(0, 7);
    const columnSequence = boardingPass.slice(7, 10);
    const row = calculateBSP(rowSequence, 0, 127, 'F', 'B');
    const column = calculateBSP(columnSequence, 0, 7, 'L', 'R');
    return row * 8 + column;
  });

  return Math.max(...seatIds); // Return the highest value in the array
};
