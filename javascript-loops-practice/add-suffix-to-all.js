/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var appended = [];
  for (var i = 0; i < words.length; i++) {
    appended.push(words[i] += suffix);
  }
  return appended;
}
// console.log("addSuffixToAll exercise:", addSuffixToAll(["jump", "lump", "hump"], "ed"));
