export const part1 = (input: string) => {
  const instructions = input.split('\n');

  let accumulator = 0;
  let stackPointer = 0;

  while (stackPointer <= instructions.length) {
    const instruction = instructions[stackPointer];

    if (instruction === 'EXECUTED') break;
    instructions[stackPointer] = 'EXECUTED';

    const [operation, argument] = instruction.split(' ');

    if (operation === 'acc') {
      accumulator += parseInt(argument);
      stackPointer++;
    } else if (operation === 'jmp') {
      stackPointer += parseInt(argument);
    } else if (operation === 'nop') {
      stackPointer++;
    }
  }

  return accumulator;
};
