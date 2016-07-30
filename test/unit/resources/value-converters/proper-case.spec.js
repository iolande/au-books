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

    it('third letter if the first two were O\'');
    it('third letter if the first two were Mc');
    it('fourth letter if the first three were Mac and the fourth is not a vowel');
    it('first letter after a space');
  });
});
