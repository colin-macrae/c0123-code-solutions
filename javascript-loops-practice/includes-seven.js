/* exported includesSeven */
function includesSeven(array) {
  var hasSevenOrNot = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      hasSevenOrNot = true;
    }
  }
  return hasSevenOrNot;
}
// console.log("includesSeven exercise:", includesSeven([2, 3, 1, 0, 2, 7]));
