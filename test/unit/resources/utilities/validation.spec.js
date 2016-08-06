import {Validation} from '../../../../src/resources/utilities/validation';

xdescribe('Validation', () => {
  let sut;

  beforeEach(() => {
    sut = new Validation();
  });

  afterEach(() => {
    sut = null;
  });

  describe('init', () => {
    describe('properties', () => {
      it('should only set the expected properties', () => {
        expect(Object.keys(sut).length).toBe(0);
      });
    });
  });

  describe('maxlength', () => {
    it('should set invalid if the value is more than the requisite number of chars', () => {
      const maxlength = 10;
      const testValue = 'x'.repeat(maxlength + 1);
      let property = { isValid: true, maxlength: maxlength, message: { status: null, text: null }, value: testValue };

      sut.validate(property);

      expect(property.isValid).toBeFalsy();
    });
  });
});
