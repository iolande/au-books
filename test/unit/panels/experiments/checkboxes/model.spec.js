import {SocialMediaModel} from '../../../../../src/panels/experiments/checkboxes/model';

describe('SocialMediaModel', () => {
  let sut;

  beforeEach(() => {
    sut = new SocialMediaModel();
  });

  afterEach(() => {
    sut = null;
  });

  describe('init', () => {
    describe('properties', () => {
      it('should only set the expected properties', () => {
        expect(Object.keys(sut).length).toBe(1);
      });
    });

    // describe('default values', () => {
    //   it('should set property to value', () => {
    //     expect(sut.property).toEqual(value)
    //   });
    // });

    // describe('constructor', () => {
    //   it('should set property', () => {
    //     expect(sut.property).toBe(property)
    //   });
    // });
  });
});
