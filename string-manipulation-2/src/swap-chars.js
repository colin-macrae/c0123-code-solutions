/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var finishedString = '';
  var finishedStringArray = [];
  var firstIndexLetter = string[firstIndex];
  var secondIndexLetter = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    finishedStringArray.push(string[i]);
  }
  finishedStringArray[firstIndex] = secondIndexLetter;
  finishedStringArray[secondIndex] = firstIndexLetter;
  for (var j = 0; j < finishedStringArray.length; j++) {
    finishedString += finishedStringArray[j];
  }
  return finishedString;
}

// pseudocode
// loop and take each letter and put it into an array
// switch array around accordingly
// loop thru array and add each value to a new string;
