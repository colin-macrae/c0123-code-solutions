/* exported truncate */
function truncate(length, string) {
  var shortString = '';
  if (string.length < length) {
    for (var i = 0; i <= string.length - 1; i++) {
      shortString += string[i];
    }
  } else {
    for (var j = 0; j <= length - 1; j++) {
      shortString += string[j];
    }
  }
  shortString += '...';
  return shortString;
}
