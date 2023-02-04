/* exported capitalize */
// function capitalize(word) {
//   var cappedWord = ' ';
//   var stringLettersArray = [];
//   for (var i = word.length - 1; i > 0; i--) {
//     stringLettersArray.push(word[i]);
//       }
//   for (var j = stringLettersArray.length - 1; j > 0; j--) {

//   }

// }

// iterate through the word completely
// start at end of word and go to 0
// at indez 0, capitalize it

// push each letter to an array as a string
// loop thru that backwards,
// adding each indexed string to create a new string
// variable

// capped word is concatenation of all

function capitalize(word) {
  var cappedWord = '';
  var cappedLetter = '';
  var lowerCaseLetters = '';
  cappedLetter = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    lowerCaseLetters += word[i].toLowerCase();
  }
  cappedWord = cappedLetter + lowerCaseLetters;
  return cappedWord;
}
