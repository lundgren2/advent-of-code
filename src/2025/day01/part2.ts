const parseInstructions = (input: string) =>
  input.trim().replaceAll('L', '-').replaceAll('R', '').split('\n').map(Number);

export function part2(input: string) {
  const instructions = parseInstructions(input);

  let password = 0;
  let dial = 50;

  for (const instruction of instructions) {
    for (let i = 0; i < Math.abs(instruction); i++) {
      if (instruction < 0) dial--;
      else dial++;

      dial %= 100;
      if (dial === 0) password++;
    }
  }

  return password;
}
