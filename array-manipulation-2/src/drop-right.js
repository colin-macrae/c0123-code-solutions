/* exported dropRight */
function dropRight(array, count) {
  var droppedRightArray = [];
  for (var i = array.length - 1 - count; i >= 0; i--) {
    // droppedRightArray.unshift(array.length[i]);
    droppedRightArray.unshift(array[i]);
  }
  return droppedRightArray;
}

// usually we start on the left and go right.  you set the start point from the left side.  0 is the first index.  you can skip the first, second etc.
// if the count is longer than the array, what should we return?  set a conditional that says if the number dropped (count) is more than the actual items in the array (array.length), it simply returns an empty array
// since we are starting at the end, but want to keep the order the same, we should put each new entry at the front of the array (unshift).
