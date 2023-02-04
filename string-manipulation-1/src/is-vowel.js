/* exported isVowel */
function isVowel(char) {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u' ||
    char === 'A' ||
    char === 'E' ||
    char === 'I' ||
    char === 'O' ||
    char === 'U'
  ) {
    return true;
  } else return false;
}
// console.log(isVowel("a"))

// for [i], if === to a or e or i or o or u , return
// true
// other wise, if not equal to those return false
