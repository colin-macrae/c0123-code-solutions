/* exported ransomCase */
function ransomCase(string) {
  var ransomedWord = '';
  for (var i = 0; i < string.length; i++) {
    if ([i] % 2 === 0) {
      ransomedWord += string[i].toLowerCase();
    }
    if ([i] % 2 === 1) {
      ransomedWord += string[i].toUpperCase();
    }
  }
  return ransomedWord;
}
