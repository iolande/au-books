import {ProperCaseValueConverter} from '../../../../src/resources/value-converters/proper-case';

describe('ProperCaseValueConverter', () => {
  let sut;

  beforeEach(() => {
    sut = new ProperCaseValueConverter();
  });

  afterEach(() => {
    sut = null;
  });

  describe('toView should capitalise the', () => {
    it('first letter', () => {
      const result = sut.toView('a');

      expect(result).toBe('A');
    });

    it('third letter if the first two were O\'', () => {
      const result = sut.toView('o\'brian');

      expect(result).toBe('O\'Brian');
    });

    it('third letter if the first two were Mc', () => {
      const result = sut.toView('mcdonald');

      expect(result).toBe('McDonald');
    });

    it('fourth letter if the first three were Mac and the fourth is not a vowel', () => {
      const result = sut.toView('macmillan');

      expect(result).toBe('MacMillan');
    });

    it('first letter after a space (not mc, o\', or mac)', () => {
      const result = sut.toView('a name with spaces');

      expect(result).toBe('A Name With Spaces');
    });

    it('first letter after a space (with mc, o\', and mac)', () => {
      const result = sut.toView('a mcarthur, macnair and o\'donnell name');

      expect(result).toBe('A McArthur, MacNair And O\'Donnell Name');
    });
  });

  describe('toView should not capitalise the', () => {
    it('fourth letter if the first three were Mac and the fourth is a vowel', () => {
      const result = sut.toView('macalpine');

      expect(result).toBe('Macalpine');
    });
  });
});
