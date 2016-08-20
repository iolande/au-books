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

  describe('API contains separate properties', () => {
    let apiModel;

    beforeEach(() => {
      apiModel = {
        socialMedia: {
          hasTwitter: 'YES',
          hasFacebook: 'NO',
          hasGithub: 'NOT_KNOWN',
          hasBitbucket: 'NOT_KNOWN'
        }
      };
    });

    afterEach(() => {
      apiModel = null;
    });

    describe('set for UI - work this out', () => {
      it('should set an array of selected values for the UI binding...?');

      it('should set hasTwitter as true');
      it('should set hasFacebook as false');
      it('should set hasGithub as false');
      it('should set hasBitbucket as false');
    });

    describe('get payload for API', () => {
      describe('when dirty cjecking is required', () => {
        it('should return an object containing only the updated items');
      });

      describe('when dirty checking is not required', () => {
        it('should return a single object containing all values (no dirty check)');
      });
    });
  });
});
