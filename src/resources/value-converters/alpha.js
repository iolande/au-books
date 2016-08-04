export class AlphaValueConverter {
  toView(value, element) {
    if (!value) { return ''; }

    const lastChar = value.charAt(value.length - 1);

    // console.group('from');
    // console.log(value);
    // console.log(lastChar);
    // console.log(element);
    // console.groupEnd();

    if (/[a-z]/i.test(lastChar)) {
      return value;
    }

    return value.slice(0, -1);
  }
}

