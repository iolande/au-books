import {inject} from 'aurelia-framework';
import {SocialMediaModel} from './model';

@inject(SocialMediaModel)
export class SocialMedia {
  checkboxOptions = [
    { label: 'Twitter', value: 'twitter' },
    { label: 'Facebook', disabled: true, value: 'facebook' },
    { label: 'Github', value: 'github' },
    { label: 'Bitbucket', value: 'bitbucket' }
  ]

  constructor(socialMediaModel) {
    this.model = socialMediaModel;
  }

  checkboxSave() {
    console.log(this.model.selectedValues);
  }
}
