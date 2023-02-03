/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// console.log("sumAll exercise:", sumAll([1, 2, 3, 4]));
