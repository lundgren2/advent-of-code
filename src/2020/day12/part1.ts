enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export const part1 = (input: string) => {
  const instructions = input.split('\n');
  let east = 0;
  let south = 0;
  let direction = Direction.EAST;

  instructions.forEach(instruction => {
    const action = instruction.substring(0, 1);
    const value = parseInt(instruction.substring(1));

    switch (action) {
      case 'F':
        if (direction === Direction.EAST) east += value;
        else if (direction === Direction.WEST) east -= value;
        else if (direction === Direction.NORTH) south -= value;
        else if (direction === Direction.SOUTH) south += value;
        break;
      case 'N':
        south -= value;
        break;
      case 'S':
        south += value;
        break;
      case 'E':
        east += value;
        break;
      case 'W':
        east -= value;
        break;
      case 'R':
        direction = (direction + value / 90) % 4;
        break;
      case 'L':
        direction = (direction - value / 90) % 4;
        if (direction < 0) direction += 4;
        break;
      default:
        break;
    }
  });
  return east + south;
};
