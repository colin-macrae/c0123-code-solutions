/* exported getKeys */
// const stuff = { firstName: 'mike', lastName: 'smith', middleName: 'eric' };

function getKeys(object) {
  var array = [];
  for (var property in object) {
    array.push(property);
  }
  return array;
}
// console.log(getKeys(stuff));

// function getKeys(object) {
//   var obKeys = [];
//   for (var i = 0; i < object.length; i++) {
//     obKeys.push(object[i]); // this line is not working
//   }
//   return obKeys;
// }
// console.log(getKeys(dave));
