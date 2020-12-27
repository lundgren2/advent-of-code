const cloneSeats = (seats: string[][]) => JSON.parse(JSON.stringify(seats));

const countOccupiedSeats = (seats: string[]) => {
  return seats.reduce((acc, seat) => {
    if (seat === '#') return acc + 1;
    return acc;
  }, 0);
};

const countAdjacentSeats = (seats: string[][], i: number, j: number) => {
  const prevRow = seats[i - 1];
  const nextRow = seats[i + 1];
  const currentRow = seats[i];

  return countOccupiedSeats([
    prevRow && prevRow[j], // UP
    nextRow && nextRow[j], // DOWN
    currentRow[j - 1] && currentRow[j - 1], // LEFT
    currentRow[j + 1] && currentRow[j + 1], // RIGHT
    prevRow && prevRow[j - 1] && prevRow[j - 1], // UP LEFT
    prevRow && prevRow[j + 1] && prevRow[j + 1], // UP RIGHT
    nextRow && nextRow[j - 1] && nextRow[j - 1], // DOWN LEFT
    nextRow && nextRow[j + 1] && nextRow[j + 1], // DOWN RIGHT
  ]);
};

// const printSeats = (seats: string[][]) => {
//   console.log(seats.map(seat => seat.join('').slice(0) + '\n').join(''));
// };

const updateSeats = (seats: string[][]): string[][] => {
  const newSeats = cloneSeats(seats);
  let seatChanged = false;

  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[0].length; j++) {
      if (seats[i][j] === 'L') {
        if (countAdjacentSeats(seats, i, j) === 0) {
          newSeats[i][j] = '#';
          seatChanged = true;
        }
      } else if (seats[i][j] === '#') {
        if (countAdjacentSeats(seats, i, j) >= 4) {
          newSeats[i][j] = 'L';
          seatChanged = true;
        }
      }
    }
  }

  seats = cloneSeats(newSeats);
  // Update seats if state has changed
  if (seatChanged) return updateSeats(seats);
  return seats;
};

export const part1 = (input: string) => {
  const seats = input.split('\n').map(a => a.split(''));
  // printSeats(seats);
  return countOccupiedSeats(updateSeats(seats).join(',').split(','));
};
