export const part2 = (input: string) => {
  const result = input.split('\n').reduce(
    (prev, line) => {
      const [instruction, value] = line.split(' ');
      const [aim, horizontal, depth] = prev;

      if (instruction === 'up') {
        return [aim - parseInt(value), horizontal, depth];
      } else if (instruction === 'down') {
        return [aim + parseInt(value), horizontal, depth];
      } else if (instruction === 'forward') {
        return [
          aim,
          horizontal + parseInt(value),
          depth + aim * parseInt(value),
        ];
      }
      return prev;
    },
    [0, 0, 0]
  );

  return result[1] * result[2];
};
