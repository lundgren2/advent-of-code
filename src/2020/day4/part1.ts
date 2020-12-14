export interface Passport {
  /**
   * Birth Year
   */
  byr: number;
  /**
   * Issue Year
   */
  iyr: number;
  /**
   * Expiration Year
   */
  eyr: number;
  /**
   * Height
   */
  hgt: string;
  /**
   * Hair Color
   */
  hcl: string;
  /**
   * Eye Color
   */
  ecl: string;
  /**
   * Passport ID
   */
  pid: string;
  /**
   * Country ID
   */
  cid?: number;
}

export const parsePasswords = (input: string) => {
  return input.split('\n\n').map(passport =>
    passport.split(/\s+/).reduce((obj: Partial<Passport>, item) => {
      const [key, value] = item.split(':');
      return {...obj, [key]: value};
    }, {})
  );
};

export const part1 = (input: string) => {
  const passports = parsePasswords(input);

  const validPassports = passports.filter(passport => {
    const length = Object.keys(passport).length;
    return 'cid' in passport ? length === 8 : length === 7;
  }) as Passport[];

  return validPassports.length;
};
