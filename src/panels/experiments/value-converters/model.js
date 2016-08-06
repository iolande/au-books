export class ConverterExperimentModel {
  _nameConversion = {
    value: null,
    isRequired: true,
    min: 1,
    max: 40,
    isValid: true,
    status: null,
    message: null
  };

  _alphaConversion = {
    value: null,
    isRequired: false,
    max: 40,
    isValid: true,
    status: null,
    message: null,
    pattern: '[a-zA-Z]'
  };

  get nameConversion() {
    return this._nameConversion.value;
  }

  set nameConversion(value = null) {
    this._nameConversion.value = value;
  }

  get alphaConversion() {
    return this._alphaConversion.value;
  }

  set alphaConversion(value = null) {
    this._alphaConversion.value = value;
  }
}
