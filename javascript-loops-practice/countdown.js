/* exported countdown */
function countdown(number) {
  var countdown = [];
  for (var i = number; i >= 0; i--) {
    countdown.push(i);
  }
  return countdown;
}
// console.log("getIndexes exercise:", countdown(5))
