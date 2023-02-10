/* exported ransomCase */
// RANSOM CASED
// each even is lower, odd is upper
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
// ransomedWord += string[0].toLowerCase();
// ransomedWord += string[1].toUpperCase();
// ransomedWord += string[2].toLowerCase();
// ransomedWord += string[3].toUpperCase();
// ransomedWord += string[4].toLowerCase();
// ransomedWord += string[5].toUpperCase();
// ransomedWord += string[6].toLowerCase();
// ransomedWord += string[7].toUpperCase();
// ransomedWord += string[8].toLowerCase();
// ransomedWord += string[9].toUpperCase();
// ransomedWord += string[10].toLowerCase();
// ransomedWord += string[11].toUpperCase();
// ransomedWord += string[12].toLowerCase();
