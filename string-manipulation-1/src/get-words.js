/* exported getWords */
function getWords(string) {
  var stringToArray = [];
  if (string === '') {
    stringToArray = [];
  } else {
    stringToArray = string.split(' ');
  }
  return stringToArray;
}
// console.log(getWords(' '));

// text.push(text.split([]))

// take the string, get each word
// push each word into array

// string.split(' ')

// function getWords(string) {
//   var stringToArray = [];
//   for (var i = 0; i < 1; i++) {
//     stringToArray.push(string.split(' '));
//   }
//   return stringToArray;
// }
// console.log(getWords('uh huh'));
