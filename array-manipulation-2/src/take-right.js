/* exported takeRight */
function takeRight(array, count) {
  var finishedArray = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      finishedArray.push(array[i]);
    }
    return finishedArray;
  } else {
    for (var j = array.length - count; j < array.length; j++) {
      finishedArray.push(array[j]);
    }
    return finishedArray;
  }
}
