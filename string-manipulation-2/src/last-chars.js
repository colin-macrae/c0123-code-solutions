/* exported lastChars */
function lastChars(length, string) {
  var finishedString = '';
  for (var i = string.length - length; i < length; i++) {
    finishedString += string[i];
  }
  return finishedString;
}

// console.log(lastChars(5, 'macrae'));

// function lastChars(lengthString, string) {
//   var finishedString = '';
//   // if (string.length === 0) { // if 0 then return '' and stop;
//   //   finishedString = '';
//   //   return finishedString;
//   // }
//   if (lengthString > string.length) { // if shorter than parameter "length" return only string
//     for (var i = string.length; i >= 0; i--) {
//       finishedString += string[i];
//     }
//     return finishedString;
//   }
//   else if (lengthString < string.length) {
//     for (var k = 0; k < lengthString; k++) {
//       finishedString += string[k];
//     }
//     return finishedString;
//   }
// }

// function lastChars(string) {
//   // var finishedString = '';
//   console.log('length of string:', string);
// }
// console.log(lastChars('hi'));
