const isValid = (nextNumber: number, arrayToCompare: number[]) => {
  const arrayLength = arrayToCompare.length;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      const a = arrayToCompare[i];
      const b = arrayToCompare[j];
      if (a + b === nextNumber && a !== b) return true;
    }
  }
  return false;
};

export const part1 = (input: string, preamble: number) => {
  const inputNumbers = input.split('\n').map(Number);

  let pointer = preamble;
  while (pointer < inputNumbers.length) {
    const valueToCompare = inputNumbers[pointer];
    const arrayToCompare = inputNumbers.slice(pointer - preamble, pointer);

    if (!isValid(valueToCompare, arrayToCompare)) {
      return valueToCompare;
    }
    pointer++;
  }
};
