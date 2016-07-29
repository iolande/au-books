import {inject} from 'aurelia-framework';
import {IdentityModel} from './model';

@inject(IdentityModel)
export class Identity {
  constructor(identityModel) {
    this.model = identityModel;
  }
}
