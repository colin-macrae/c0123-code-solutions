/* exported getLastChar */
function getLastChar(string) {
  var firstCharIs = '';
  for (var i = string.length - 1; i > string.length - 2; i--) {
    firstCharIs = string[i];
  }
  return firstCharIs;
}

// console.log(getLastChar("Colin"))

//  for (var i = string.length-1; i > string.length - 2; i--) {
//     firstCharIs = string[i];
//   }
//   return firstCharIs
// }
