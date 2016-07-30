import {bindable} from 'aurelia-framework';
import {uniqueID} from '../utilities/unique-id';

export class TextInput {
  @bindable value;
  @bindable label;

  id = uniqueID();

  valueChanged(newValue, oldValue) {

  }
}

