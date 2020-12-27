const cloneSeats = (seats: string[][]) => JSON.parse(JSON.stringify(seats));

const countOccupiedSeats = (seats: string[]) => {
  return seats.reduce((acc, seat) => {
    if (seat === '#') return acc + 1;
    return acc;
  }, 0);
};

type Directions = Record<string, number[]>;

export const countAdjacentSeats = (seats: string[][], i: number, j: number) => {
  const directions: Directions = {
    UP: [0, -1],
    DOWN: [0, 1],
    LEFT: [-1, 0],
    RIGHT: [1, 0],
    UP_LEFT: [-1, -1],
    UP_RIGHT: [1, -1],
    DOWN_LEFT: [-1, 1],
    DOWN_RIGHT: [1, 1],
  };

  return Object.keys(directions).reduce((count, direction) => {
    const [stepX, stepY] = directions[direction];
    let x = j + stepX;
    let y = i + stepY;

    while (x >= 0 && x < seats[0].length && y >= 0 && y < seats.length) {
      if (seats[y][x] === 'L') return count;
      else if (seats[y][x] === '#') return count + 1;
      x += stepX;
      y += stepY;
    }
    return count;
  }, 0);
};

const updateSeats = (seats: string[][]): string[][] => {
  const newSeats = cloneSeats(seats);
  let seatChanged = false;
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[0].length; j++) {
      const currentSeat = seats[i][j];
      if (currentSeat === '.') continue;
      if (currentSeat === 'L') {
        if (countAdjacentSeats(seats, i, j) === 0) {
          newSeats[i][j] = '#';
          seatChanged = true;
        }
      } else if (currentSeat === '#') {
        if (countAdjacentSeats(seats, i, j) >= 5) {
          newSeats[i][j] = 'L';
          seatChanged = true;
        }
      }
    }
  }
  // Update seats if state has changed
  if (seatChanged) {
    return updateSeats(cloneSeats(newSeats));
  }
  return seats;
};

export const part2 = (input: string) => {
  const seats = input.split('\n').map(a => a.split(''));
  return countOccupiedSeats(updateSeats(seats).join(',').split(','));
};

// const printSeats = (seats: string[][]) => {
//   console.log(seats.map(seat => seat.join('').slice(0) + '\n').join(''));
// };
