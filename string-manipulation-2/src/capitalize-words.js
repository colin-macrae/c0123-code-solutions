/* exported capitalizeWords */
function capitalizeWords(string) {
  var newUpperCasedString = '';
  var arrayOfRawWords = string.split(' ');
  for (var i = 0; i < arrayOfRawWords.length - 1; i++) {
    newUpperCasedString += arrayOfRawWords[i][0].toUpperCase();
    for (var j = 1; j < arrayOfRawWords[i].length; j++) {
      newUpperCasedString += arrayOfRawWords[i][j].toLowerCase();
    }
    newUpperCasedString += ' ';
  }
  for (var h = arrayOfRawWords.length - 1; h < arrayOfRawWords.length; h++) {
    newUpperCasedString += arrayOfRawWords[h][0].toUpperCase();
    for (var k = 1; k < arrayOfRawWords[h].length; k++) {
      newUpperCasedString += arrayOfRawWords[h][k].toLowerCase();
    }
  }
  return newUpperCasedString;
}
