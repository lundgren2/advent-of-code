type Bags = Record<string, string[]>;

const parseColor = (rule: string) => rule.replace(/\d|bag(s?.)?/g, '').trim();

export const parseBags = (input: string): Bags => {
  return input.split('\n').reduce((bags, r) => {
    const [, color, rules] = r.match(/([a-z]+ [a-z]+) bags contain (.*)/)!;
    return {...bags, [color]: rules.split(', ')};
  }, {});
};

export const part1 = (input: string) => {
  const bags = parseBags(input);

  const checkBag = (color: keyof Bags): boolean => {
    const rules = bags[color];

    if (rules.join().includes('no other bags')) return false;
    if (rules.join().includes('shiny gold')) return true;

    // Check if the other bags conain the target
    return !!rules.filter(rule => checkBag(parseColor(rule))).length;
  };

  // Check all bags if valid
  const validBags = new Set();
  for (const bag in bags) checkBag(bag) && validBags.add(bag);
  return validBags.size;
};
