/* exported firstChars */
function firstChars(lengthString, string) {
  var finishedString = '';
  if (string.length === 0) { // if 0 then return '' and stop;
    finishedString = '';
    return finishedString;
  }
  if (lengthString > string.length) { // if shorter than parameter "length" return only string
    for (var i = 0; i < string.length; i++) {
      finishedString += string[i];
    }
    return finishedString;
  } else if (lengthString < string.length) {
    for (var k = 0; k < lengthString; k++) {
      finishedString += string[k];
    }
    return finishedString;
  }

}
