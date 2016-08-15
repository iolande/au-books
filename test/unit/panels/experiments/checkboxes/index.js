import {SocialMedia} from '../../../../../src/panels/experiments/checkboxes/index';

class MockSocialMediaModel {}

describe('SocialMedia', () => {
  let sut;
  let mockSocialMediaModel;

  beforeEach(() => {
    mockSocialMediaModel = new MockSocialMediaModel();
    sut = new SocialMedia(mockSocialMediaModel);
  });

  afterEach(() => {
    mockSocialMediaModel = null;
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
