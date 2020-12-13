interface Passport {
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
  pid: number;
  /**
   * Country ID
   */
  cid?: number;
}

export const part1 = (input: string) => {
  const passports = input.split('\n\n').map(passport =>
    passport.split(/\s+/).reduce((obj: Passport, item) => {
      const keyValue = item.split(':');
      return {...obj, [keyValue[0]]: keyValue[1]};
    }, {} as Passport)
  );
  const validPassports: Passport[] = passports.filter(passport => {
    const length = Object.keys(passport).length;
    return 'cid' in passport ? length === 8 : length === 7;
  });

  return validPassports.length;
};
