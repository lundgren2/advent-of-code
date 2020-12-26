const runProgram = (program: string[]): number | null => {
  let accumulator = 0;
  let stackPointer = 0;

  while (stackPointer < program.length) {
    const instruction = program[stackPointer];
    if (instruction === 'EXECUTED') return null; // Loop detected

    const [op, arg] = instruction.split(' ');
    program[stackPointer] = 'EXECUTED';

    if (op === 'acc') {
      accumulator += parseInt(arg);
      stackPointer++;
    } else if (op === 'jmp') {
      stackPointer += parseInt(arg);
    } else if (op === 'nop') {
      stackPointer++;
    }
  }

  return accumulator; // program terminated;
};

export const part2 = (input: string) => {
  const instructions = input.split('\n');

  for (let i = 0; i < instructions.length - 1; i++) {
    const [op, arg] = instructions[i].split(' ');
    if (op !== 'acc') {
      // Swap jmp and nop and run new program
      const newProgram = [...instructions];
      newProgram[i] = op === 'jmp' ? `nop ${arg}` : `jmp ${arg}`;
      const result = runProgram(newProgram);
      if (result) return result;
    }
  }
};
