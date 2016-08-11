import {inject} from 'aurelia-framework';
import {BestContactModel} from './model';

@inject(BestContactModel)
export class BestContact {
  radioOptions = [
    { label: 'Phone', value: 'landline' },
    { label: 'Carrier pigeon', disabled: true, value: 'pigeon' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Post', value: 'snailmail' }
  ]

  constructor(bestContactModel) {
    this.model = bestContactModel;
  }

  radioSave() {
    // console.log(this.model.selectedValues);
    console.log(this.model.radioSelected);
  }
}
