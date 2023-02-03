/* exported findIndex */
function findIndex(array, value) {
  var indxLocation = -1;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return indxLocation;
}
// console.log("findInex exercise:", findIndex([1, 3, 2, 2, 6, 10, 6], 6));
