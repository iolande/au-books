import {bindable} from 'aurelia-framework';
import {uniqueID} from '../utilities/unique-id';

export class RadioGroup {
  @bindable selected = null
  @bindable options = []

  groupName = uniqueID();
}
