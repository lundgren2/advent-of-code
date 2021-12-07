export const part1 = (input: string) => {
  return input
    .split('\n')
    .reduce(
      (prev, line) => {
        const [instruction, value] = line.split(' ');
        const [depth, horizontal] = prev;
        if (instruction === 'up') {
          return [depth - parseInt(value), horizontal];
        } else if (instruction === 'down') {
          return [depth + parseInt(value), horizontal];
        } else if (instruction === 'forward') {
          return [depth, horizontal + parseInt(value)];
        }
        return prev;
      },
      [0, 0]
    )
    .reduce((a, b) => a * b);
};
