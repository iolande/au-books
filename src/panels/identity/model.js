export class IdentityModel {
  _firstName = {
    value: null,
    isRequired: true,
    min: 1,
    max: 40,
    isValid: true,
    status: null,
    message: null
  };

  _middleName = {
    value: null,
    isRequired: false,
    max: 40,
    isValid: true,
    status: null,
    message: null,
    pattern: '[a-zA-Z]'
  };

  _lastName = {
    value: null,
    isRequired: true,
    min: 1,
    max: 40,
    isValid: true,
    status: null,
    message: null
  };

  get firstName() {
    return this._firstName.value;
  }

  set firstName(value = null) {
    this._firstName.value = value;
  }

  get middleName() {
    return this._middleName.value;
  }

  set middleName(value = null) {
    this._middleName.value = value;
  }

  get lastName() {
    return this._lastName.value;
  }

  set lastName(value = null) {
    this._lastName.value = value;
  }
}
