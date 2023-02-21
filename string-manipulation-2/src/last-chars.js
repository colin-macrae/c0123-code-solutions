/* exported lastChars */
function lastChars(length, string) {
  var finishedString = '';
  if (string.length < length) {
    for (var j = 0; j < string.length; j++) {
      finishedString += string[j];
    }
    return finishedString;
  } else {
    for (var i = string.length - length; i < string.length; i++) {
      finishedString += string[i];
    }
    return finishedString;
  }
}
