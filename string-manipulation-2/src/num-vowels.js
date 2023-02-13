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

// ORIGINALLY WRITTEN AS FOLLOWS, BUT NOT EFFICIENT, UPDATED
// if (string[i] === 'a') {
//   vowelCounter += 1;
// }
// if (string[i] === 'e') {
//   vowelCounter += 1;
// }
// if (string[i] === 'i') {
//   vowelCounter += 1;
// }
// if (string[i] === 'o') {
//   vowelCounter += 1;
// }
// if (string[i] === 'u') {
//   vowelCounter += 1;
// }
// if (string[i] === 'A') {
//   vowelCounter += 1;
// }
// if (string[i] === 'E') {
//   vowelCounter += 1;
// }
// if (string[i] === 'I') {
//   vowelCounter += 1;
// }
// if (string[i] === 'O') {
//   vowelCounter += 1;
// }
// if (string[i] === 'U') {
//   vowelCounter += 1;
// }
