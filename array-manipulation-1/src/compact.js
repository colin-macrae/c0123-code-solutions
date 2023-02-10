
function compact(array) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
compact([0, false, '', null, -0, 0, 1]);

// function compact(array) {
//   var filteredArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (
//       array[i] === true ||
//       array[i] === typeof number
//     ) {
//       filteredArray.push(array[i]);
//     } else if (
//       array[i] !== false &&
//       array[i] !== null &&
//       array[i] !== 0 &&
//       array[i] !== -0 &&
//       array[i] !== '' &&
//       array[i] !== typeof undefined &&
//       array[i] !== NaN

//     ) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }
// console.log(compact([0, false, '', null, -0, 0, 1]));

// ||
// array[i] === typeof number ||

// array[i] !== false ||
// array[i] !== null ||
// array[i] !== 0 ||
// array[i] !== -0 ||
// array[i] !== typeof undefined ||
// array[i] !== '')

// if (array[i] === typeof number) { filteredArray.push(array[i]); }
// if (array[i] !== 0) {filteredArray.push(array[i]); }

// && array[i] !== 0

// INITIAL PSEUDO
// look at the first value of the array (array[0])
// if it meets qualification, push to filteredArray
// now push the full array to a new variable
// shift the array to delete the previously
// nope, this does not work.  each variable has to pass all tests, not just one.

// REDO PSEUDO
// create a loop that loops thru all inexes of array
/// / look at the first value of the array (array[0])
/// / if it meets ALL qualifications, push to filteredArray
// loop moves to 2nd index
/// / look at the second value of the array (array[1])
/// / if it meets ALL qualifications, push to filteredArray
