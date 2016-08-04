import {bindable} from 'aurelia-framework';
import {uniqueID} from '../utilities/unique-id';

export class TextInput {
  @bindable value = null
  @bindable label = null

  id = uniqueID();

  attached() {
    // debugger;
    // console.log(this.field);
  }

  valueChanged(newValue, oldValue) {
    // if (this.field && this.field.validity.valid) {
    //   this.message = '';
    // } else {
    //   this.message = 'NOPE - bad user.';
    // }
  }
}
