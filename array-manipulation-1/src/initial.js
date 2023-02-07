/* exported initial */
function initial(array) {
  var arrayInitial = [];
  for (var i = 0; i < array.length - 1; i++) {
    arrayInitial.push(array[i]);
  }
  return arrayInitial;
}
// console.log(tail(['hi', 'bye', 'pie']));
