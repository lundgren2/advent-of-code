import {parsePasswords, Passport} from './part1';

export const validByr = (byr: number) => byr >= 1920 && byr <= 2002;
export const validIyr = (iyr: number) => iyr >= 2010 && iyr <= 2020;
export const validEyr = (eyr: number) => eyr >= 2020 && eyr <= 2030;

export const validHgt = (hgt: string) => {
  const height = parseInt(hgt.match(/\d+/)![0]);

  if (hgt.includes('cm')) {
    return height >= 150 && height <= 193;
  } else if (hgt.includes('in')) {
    return height >= 59 && height <= 76;
  }

  return false;
};

export const validHcl = (hcl: string) => {
  const hexColorRegEx = /^#[0-9a-f]{6}$/;
  return hexColorRegEx.test(hcl);
};

export const validEcl = (ecl: string) => {
  const validEclValues = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return validEclValues.includes(ecl);
};

export const validPid = (pid: string) => {
  const pidRegEx = /^([0-9]{9})$/;
  return pidRegEx.test(pid);
};

export const part2 = (input: string) => {
  const passports = parsePasswords(input).filter(passport => {
    const length = Object.keys(passport).length;
    return 'cid' in passport ? length === 8 : length === 7;
  }) as Passport[];

  const validPassports = passports.filter(passport => {
    const {byr, iyr, eyr, hgt, hcl, ecl, pid} = passport;

    if (
      validByr(byr) &&
      validIyr(iyr) &&
      validEyr(eyr) &&
      validHgt(hgt) &&
      validHcl(hcl) &&
      validEcl(ecl) &&
      validPid(pid)
    ) {
      return true;
    }

    return false;
  });

  return validPassports.length;
};
