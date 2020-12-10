export const part1 = (intcodes: number[], overrides?: boolean) => {
  if (overrides) {
    intcodes[1] = 12;
    intcodes[2] = 2;
  }

  let index = 0;

  while (intcodes[index] !== 99) {
    const opcode = intcodes[index];
    const input1 = intcodes[intcodes[index + 1]];
    const input2 = intcodes[intcodes[index + 2]];
    const output = intcodes[index + 3];

    if (opcode === 1) {
      intcodes[output] = input1 + input2;
    } else if (opcode === 2) {
      intcodes[output] = input1 * input2;
    }
    index += 4;
  }

  return intcodes;
};

export const part2 = (input: number[]) => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      const memory = [...input];
      memory[1] = noun;
      memory[2] = verb;

      let pointer = 0;

      while (memory[pointer] !== 99) {
        const opcode = memory[pointer];
        const input1 = memory[memory[pointer + 1]];
        const input2 = memory[memory[pointer + 2]];
        const output = memory[pointer + 3];

        if (opcode === 1) {
          memory[output] = input1 + input2;
        } else if (opcode === 2) {
          memory[output] = input1 * input2;
        }
        pointer += 4;
      }

      if (memory[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};
