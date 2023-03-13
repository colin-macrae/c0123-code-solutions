/* exported take */
function take(array, count) {
  var returnedArray = [];
  if (array.length === 0) {
    returnedArray = [];
    return returnedArray;
  } else {
    for (var i = 0; i < count; i++) {
      returnedArray.push(array[i]);
    }
    return returnedArray;
  }
}
