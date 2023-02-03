/* exported filterOutNulls */
function filterOutNulls(values) {
  var nullsFilteredOut = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      nullsFilteredOut.push(values[i]);
    }
  }
  return nullsFilteredOut;
}
// console.log("filterOutNulls exercise:", filterOutNulls([7, 8, null, 9]))
