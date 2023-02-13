/* exported capitalizeWords */
function capitalizeWords(string) {
  var newUpperCasedString = '';
  var arrayOfRawWords = string.split(' ');
  for (var i = 0; i < arrayOfRawWords.length - 1; i++) {
    newUpperCasedString += arrayOfRawWords[i][0].toUpperCase();
    for (var j = 1; j < arrayOfRawWords[i].length; j++) {
      newUpperCasedString += arrayOfRawWords[i][j].toLowerCase();
    }
    newUpperCasedString += ' ';
  }
  for (var h = arrayOfRawWords.length - 1; h < arrayOfRawWords.length; h++) {
    newUpperCasedString += arrayOfRawWords[h][0].toUpperCase();
    for (var k = 1; k < arrayOfRawWords[h].length; k++) {
      newUpperCasedString += arrayOfRawWords[h][k].toLowerCase();
    }
  }
  return newUpperCasedString;
}
// console.log(capitalizeWords('hi THERE, my NAME is colin'));

//     PSEUDOCODE PSEUDOCODE PSEUDOCODE PSEUDOCODE PSEUDOCODE PSEUDOCODE
// write a function that does the following
// create a string variable, newUpperCasedString
// split the string, put in var arrayOfRawWords, and loop thru arrayOfRawWords, except for last word
//   grab the word at [i] in an array, and then (below) inside loop convert whole word and add before going to next word, by doing this:
//   change first letter to cap, store it to newUpperCasedString, which is outside of the array
//   loop
//      change the rest to lowercase, storing each to newUpperCasedString, until word complete
//   add a space
// when a word is complete, go to the next word in the array
// the word is now finished
// once that is finished, you still need to do the last word, without a space after it

/// ////////////////////////////  ANOTHER STUDENT'S CODE USING JOIN METHOD
// function capitalizeWords(string) {
//   var stringLowercase = string.toLowerCase();
//   var stringArray = stringLowercase.split(' ');
//   // console.log(stringArray);
//   for (var i = 0; i < stringArray.length; i++) {
//     stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
//   }
//   return stringArray.join(' ');
// C

//                SOME JUNK I WANT TO SAVE FOR STUDY ; )
// function capitalizeWords(string) {
//   var newUpperCasedString = '';
//   var arrayOfRawWords = string.split(' ');
//   // console.log(arrayOfRawWords);
//   // newUpperCasedString += arrayOfRawWords[0][0].toUpperCase();
//   for (var i = 0; i < arrayOfRawWords.length - 1; i++) {
//     newUpperCasedString += arrayOfRawWords[i][0].toUpperCase();
//     // console.log('first letter capped:', newUpperCasedString);
//     for (var j = 1; j < arrayOfRawWords[i].length; j++) {
//       newUpperCasedString += arrayOfRawWords[i][j].toLowerCase();
//     }
//     newUpperCasedString += ' ';
//     // console.log('first letter capped and rest of word and space:', newUpperCasedString);
//   }
//   // console.log(newUpperCasedString);
//   for (var i = arrayOfRawWords.length - 1; i < arrayOfRawWords.length; i++) {
//     newUpperCasedString += arrayOfRawWords[i][0].toUpperCase();
//     // console.log('first letter capped:', newUpperCasedString);
//     for (var j = 1; j < arrayOfRawWords[i].length; j++) {
//       newUpperCasedString += arrayOfRawWords[i][j].toLowerCase();
//     }
//     // newUpperCasedString += ' ';
//     // console.log('first letter capped and rest of word and space:', newUpperCasedString);
//   }
//   return newUpperCasedString;
// }
// console.log(capitalizeWords('hi THERE, my NAME is colin'));
