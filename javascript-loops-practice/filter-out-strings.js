/* exported filterOutStrings */
function filterOutStrings(values) {
  var stringsFilteredOut = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      stringsFilteredOut.push(values[i]);
    }
  }
  return stringsFilteredOut;
}
// console.log("filterOutStrings exercise:", filterOutStrings([1, 'a', 'b', 2, 3, 'c']))
