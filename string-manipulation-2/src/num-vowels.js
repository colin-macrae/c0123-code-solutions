/* exported numVowels */
function numVowels(string) {
  var vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' ||
      string[i] === 'e' ||
      string[i] === 'i' ||
      string[i] === 'o' ||
      string[i] === 'u' ||
      string[i] === 'A' ||
      string[i] === 'E' ||
      string[i] === 'I' ||
      string[i] === 'O' ||
      string[i] === 'U') {
      vowelCounter += 1;
    }
  }
  return vowelCounter;
}
