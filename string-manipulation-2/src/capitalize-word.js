/* exported capitalizeWord */
function capitalizeWord(word) {
  var cappedWord = '';
  cappedWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    cappedWord += word[i].toLowerCase();
  }
  if (cappedWord === 'Javascript') {
    cappedWord = 'JavaScript';
  }
  return cappedWord;
}
