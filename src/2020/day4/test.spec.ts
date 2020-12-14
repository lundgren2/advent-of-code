import {part1} from './part1';
import {readInput} from '../../utils';
import {
  part2,
  validByr,
  validEcl,
  validEyr,
  validHcl,
  validHgt,
  validIyr,
  validPid,
} from './part2';

describe('Advent of Code 2020 - Day 4', () => {
  describe('part 1', () => {
    it('should output 2 valid passports ', async () => {
      const input = await readInput(__dirname + '/test_input');
      expect(part1(input)).toBe(2);
    });

    it('should output 230 valid passports from input', async () => {
      const input = await readInput(__dirname + '/input');
      expect(part1(input)).toBe(230);
    });
  });

  describe('part 2', () => {
    describe('utils', () => {
      it('should validade Byr', () => {
        expect(validByr(2002)).toBe(true);
        expect(validByr(2003)).toBe(false);
      });

      it('should validade Iyr', () => {
        expect(validIyr(2011)).toBe(true);
        expect(validIyr(2021)).toBe(false);
      });

      it('should validade Eyr', () => {
        expect(validEyr(2020)).toBe(true);
        expect(validEyr(2030)).toBe(true);
        expect(validByr(20201)).toBe(false);
      });

      it('should validade hgt', () => {
        expect(validHgt('60in')).toBe(true);
        expect(validHgt('190cm')).toBe(true);
        expect(validHgt('190in')).toBe(false);
        expect(validHgt('190')).toBe(false);
      });

      it('should validade hcl', () => {
        expect(validHcl('#123abc')).toBe(true);
        expect(validHcl('#123abz')).toBe(false);
        expect(validHcl('123abc')).toBe(false);
      });

      it('should validade Ecl', () => {
        expect(validEcl('brn')).toBe(true);
        expect(validEcl('wat')).toBe(false);
      });

      it('should validade pid', () => {
        expect(validPid('000000001')).toBe(true);
        expect(validPid('0123456789')).toBe(false);
      });
    });

    describe('test', () => {
      it('should output 0 valid passports ', () => {
        const input = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;
        expect(part2(input)).toBe(0);
      });

      it('should output 4 valid passports from input', async () => {
        const input = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;

        expect(part2(input)).toBe(4);
      });

      it('should output 156 valid passports from input', async () => {
        const input = await readInput(__dirname + '/input');
        expect(part2(input)).toBe(156);
      });
    });
  });
});
