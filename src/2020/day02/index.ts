const parseCurrentPassword = (currentPassword: string) => {
  const regex = /(\d?\d)-(\d?\d)\s([a-z]):\s([a-z]*)/gm; // example 2-14 c: jckbwnnlkcmvnwtj
  const passwordData = regex.exec(currentPassword);
  if (!passwordData) {
    throw new TypeError(`This password cannot be parsed: "${currentPassword}"`);
  }
  const first = parseInt(passwordData[1]);
  const second = parseInt(passwordData[2]);
  const letter = passwordData[3];
  const password = passwordData[4];
  return {
    first,
    second,
    letter,
    password,
  };
};

export const part1 = (input: string) => {
  return input.split('\n').reduce((validPasswords, currentPassword) => {
    const {first: min, second: max, letter, password} = parseCurrentPassword(
      currentPassword
    );

    let count = 0;
    for (let i = 0, tot = currentPassword.length; i < tot; i++)
      if (password[i] === letter) count++;

    if (count >= min && count <= max) return validPasswords + 1;

    return validPasswords;
  }, 0);
};

export const part2 = (input: string) => {
  return input.split('\n').reduce((validPasswords, currentPassword) => {
    const {first, second, letter, password} = parseCurrentPassword(
      currentPassword
    );

    const isFirstLetterCorrect = password[first - 1] === letter;
    const isSecondLetterCorrect = password[second - 1] === letter;

    if (Number(isFirstLetterCorrect) + Number(isSecondLetterCorrect) === 1) {
      return validPasswords + 1;
    }

    return validPasswords;
  }, 0);
};
