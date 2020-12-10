const calcFuel = (mass: number) => Math.floor(mass / 3) - 2;

let totalFuel = 0;
const calcTotalFuel = (mass: number): number => {
  const fuel = calcFuel(mass);

  if (fuel > 0) {
    totalFuel += fuel;
    return calcTotalFuel(fuel);
  }

  const result = totalFuel;
  totalFuel = 0;
  return result;
};

export const part1 = (input: number[]) => {
  return input.reduce((sum, mass) => calcFuel(mass) + sum, 0);
};

export const part2 = (input: number[]) => {
  return input.reduce((sum, fuel) => sum + calcTotalFuel(fuel), 0);
};
