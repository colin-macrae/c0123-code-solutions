/* exported getIndexes */
function getIndexes(array) {
  var indx = [];
  for (var i = 0; i < array.length; i++) {
    indx.push(i);
  }
  return indx;
}
// console.log("getIndexes exercise:", getIndexes(["hi", "there"]))
