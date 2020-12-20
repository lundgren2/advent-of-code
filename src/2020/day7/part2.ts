import {parseBags} from './part1';

const parseAmount = (rule: string) => Number(rule.match(/\d/));
const parseColor = (rule: string) => {
  const color = rule.replace(/\d|bag(s?.?)?/g, '').trim();
  return !color.includes('no other') ? color : '';
};

export const part2 = (input: string) => {
  const bags = parseBags(input);
  const bagsToCount = ['shiny gold'];
  let sum = 0;

  while (bagsToCount.length > 0) {
    const bag = bagsToCount.pop()!;
    const bagsCounter = bags[bag].reduce((a, rule) => {
      const amount = parseAmount(rule);

      bagsToCount.push(
        ...Array(amount)
          .fill(parseColor(rule))
          .filter(a => a) // remove '' (no other bags)
      );

      return a + amount;
    }, 0);

    sum += bagsCounter;
  }

  return sum;
};
