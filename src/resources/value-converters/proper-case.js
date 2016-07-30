export class ProperCaseValueConverter {
  toView(value) {
    if (!value) { return ''; }

    const words = value.split(' ');
    let processedWords = words.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .map(word => {
      let returnWord = word;

      const firstTwoLetters = word.substr(0, 2).toLowerCase();
      if (firstTwoLetters === 'mc' || firstTwoLetters === 'o\'') {
        returnWord = word[0].toUpperCase() + word.substr(1, 1) + word[2].toUpperCase() + word.slice(3);
      }

      const firstThreeLetters = word.substr(0, 3).toLowerCase();
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      if (firstThreeLetters === 'mac' && vowels.indexOf(word[4]) > -1) {
        returnWord = word[0].toUpperCase() + word.substr(1, 2) + word[3].toUpperCase() + word.slice(4);
      }

      return returnWord;
    });

    return processedWords.join(' ');
  }
}
