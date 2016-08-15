import {computedFrom} from 'aurelia-framework';

export class BestContactModel {
  radioSelected = { label: null, value: null }

  @computedFrom('radioSelected')
  get selectedValue() {
    return this.radioSelected.value;
  }

  set selectedValue(value) {
    this.radioSelected.value = value;
  }
}
