/* exported reverseWord */
// function reverseWord(word) {
//  var reversedWord = ' ';
//  var reversedArray = [];
//  for (var i = word.length - 1; i >= 0; i--) {
//   reversedArray.push(word[i]);
//  }
//  for (var j = 0; j < reversedArray.length; i++) {
//     reversedWord += reversedArray;
//   }
//   return reversedWord;
// }
// console.log(reversedWord("!YADIRF"))

// loop thru the word backwards and get letter..
// at each index
// concatenate each letter and add to var reversed

// take each letter and put it somewhere
// take the letters from there and join them

// TAKE THE STRINGS IN AN ARRAY AND CONCATENATE THEM
// ITERATE THRU THE ARRAY AND ADD THEM ALL UP
// array[i]
// for(var j = 0, j = array.length; i++) {
//     reversedWord += 'reversedArray[i]' }               }

// function reverseWord(word) {
//   var reversedWord = ' ';
//   var reversedArray = [];
//   for (var i = word.length - 1; i >= 0; i--) {
//     reversedArray.push(word[i]);
//   }
//   return reversedArray;
// }
// console.log(reverseWord("!YADIRF"));

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
// console.log(reverseWord("!YADIRF"));
