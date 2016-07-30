export class ProperCaseValueConverter {
  toView(value) {
    if (!value) { return ''; }

    const words = value.split(' ');
    let processedWords = words.map(word => {
      return word[0] ? word[0].toUpperCase() + word.slice(1) : word;
    })
    .map(word => {
      if (!word[0]) { return word; }
      // TODO: speed this up with regex?
      let returnWord = word;

      const firstTwoLetters = word.substr(0, 2).toLowerCase();
      if (firstTwoLetters === 'mc' || firstTwoLetters === 'o\'') {
        returnWord = word[0] ? word[0].toUpperCase() + word.substr(1, 1) : '';
        returnWord += word[2] ? word[2].toUpperCase() + word.slice(3) : '';

        return returnWord;
      }

      const firstThreeLetters = word.substr(0, 3).toLowerCase();
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      if (firstThreeLetters === 'mac' && word[4] && vowels.indexOf(word[4].toLowerCase()) > -1) {
        returnWord = word[0] ? word[0].toUpperCase() + word.substr(1, 2) : '';
        returnWord += word[3] ? word[3].toUpperCase() + word.slice(4) : '';
      }

      return returnWord;
    });

    return processedWords.join(' ');
  }
}
