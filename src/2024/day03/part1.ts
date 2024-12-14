const parseInstructions = (input: string) =>
  Array.from(input.match(/mul\(\d{1,3},\d{1,3}\)/g) || []);

const mulXY = (input: string) => {
  const [x, y] = input.match(/\d+/g)!.map(Number);
  return x * y;
};

export function part1(input: string): number {
  const instructions = parseInstructions(input);
  console.log(instructions);

  return instructions.reduce((acc, instruction) => {
    return acc + mulXY(instruction);
  }, 0);
}
