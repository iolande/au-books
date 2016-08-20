import {computedFrom} from 'aurelia-framework';

export class SocialMediaModel {
  checkboxSelected = []

  @computedFrom('checkboxSelected')
  get selectedValues() {
    return this.checkboxSelected.map(cbx => cbx.value);
  }
}
