import {inject} from 'aurelia-framework';
import {ConverterExperimentModel} from './model';

@inject(ConverterExperimentModel)
export class ConverterExperiment {
  constructor(converterExperimentModel) {
    this.model = converterExperimentModel;
  }
}
