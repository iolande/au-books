import {computedFrom} from 'aurelia-framework';

export class SocialMediaModel {
  checkboxSelected = []

  @computedFrom('checkboxSelected')
  get selectedValues() {
    const selectedValues = [];

    this.checkboxSelected.forEach(option => {
      selectedValues.push(option.value);
    });

    return selectedValues;
  }
}
