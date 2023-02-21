/* exported take */
function take(array, count) {
  var returnedArray = [];
  if (array === []) {
    // console.log('hi');
    returnedArray = [];
    return returnedArray;
  } else {
    for (var i = 0; i < count; i++) {
      returnedArray.push(array[i]);
    }
    return returnedArray;
  }
}
// console.log(take([], 7));
