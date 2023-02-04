/* exported getValues */
// const array = { firstName: 'mike', lastName: 'smith', middleName: 'eric' };

function getValues(object) {
  var valuesArray = [];
  for (var property in object) {
    valuesArray.push(object[property]);
  }
  return valuesArray;
}
// console.log(getValues(array));
