/* exported drop */
function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
// console.log(drop(['foo', 'bar', 'baz', 'qux'], 2));
