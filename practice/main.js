// function countdown(number) {
//   var countdown = []
//   for (var i = number; i >= 0; i--) {
//     countdown.push(i)
//   }
//   return countdown
// }
// console.log("getIndexes exercise:", countdown(5))




// function sumAll(numbers) {
//   var sum = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }
// console.log("sumAll exercise:", sumAll([1, 2, 3, 4]));




// function getIndexes(array) {
//   var indx = [];
//   for (var i = 0; i < array.length; i++) {
//     indx.push(i);
//   }
//   return indx
// }
// console.log(getIndexes("getIndexes exercise:", ["hi", "there"]))





// function addSuffixToAll(words, suffix) {
//   var appended = []
//   for (var i = 0; i < words.length; i++) {
//     appended.push(words[i] += suffix)
//   }
//   return appended
// }
// console.log("addSuffixToAll exercise:", addSuffixToAll(["jump", "lump", "hump"], "ed"));





// var studentList = [{ name: "Kristian" }, { name: "Henry" }, { name: "Brenda" }]

// function getStudentNames(students) {
//   var names = [];
//   for (var i = 0; i < students.length; i++) {
//     names.push(students[i].name);
//   }
//   return names;
// }

// console.log("studentList exercise:", getStudentNames(studentList));




// function filterOutNulls(values) {
//   var nullsFilteredOut = [];
//   for (var i = 0; i < values.length; i++) {
//     if (values[i] !== null) {
//       nullsFilteredOut.push(values[i])
//     }
//   }
//   return nullsFilteredOut
// }
// console.log("filterOutNulls exercise:", filterOutNulls([7, 8, null, 9]))



// function filterOutStrings(values) {
//   var stringsFilteredOut = [];
//   for (var i = 0; i < values.length; i++) {
//     if (typeof values[i] !== 'string') {
//       stringsFilteredOut.push(values[i])
//     }
//   }
//   return stringsFilteredOut
// }
// console.log("filterOutStrings exercise:", filterOutStrings([1, 'a', 'b', 2, 3, 'c']))




// function includesSeven(array) {
//   var hasSevenOrNot = false;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 7) {
//       hasSevenOrNot = true;
//     }
//   }
//   return hasSevenOrNot;
// }
// console.log("includesSeven exercise:", includesSeven([2, 3, 1, 0, 2, 7]));





// function findIndex(array, value) {
//   var indxLocation = -1;
//   for (var i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       return i;
//     }
//   }
//   return indxLocation;
// }
// console.log("findInex exercise:", findIndex([1, 3, 2, 2, 6, 10, 6], 6));




// function oddOrEven(numbers) {
//   var oddOrEven = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       oddOrEven.push('even');
//     }
//     else {
//       oddOrEven.push('odd');
//     }
//   }
//   return oddOrEven
// }
// console.log("oddOrEven exercise:", oddOrEven([1, 6]));



// ========================================REDOS ARE BELOW

// function includesSeven(array) {
//   hasSeven = false;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 7) {
//       hasSeven = true;
//     } else {has = false}
//   }
//   return hasSeven
// }

// console.log(includesSeven([77, 200, 7, 700, '7']))




// function findIndex(array, value) {
//   var valueIsAtIndex = -1;
//   for(var i = 0; i < array.length; i++) {
//     if(array[i] === value) {
//       valueIsAtIndex = i;
//     }
//   }
//   return valueIsAtIndex
// }
// console.log(findIndex([9, 8, 3], 3))



// var newObj = { hair: 'brown', eyes: 'blue' }

// function getValue(object, key) {
//   return object[key];
// }
// console.log(getValue(newObj, 'hair'));

// //value is at object[key], so return that;




// var newObj = { hair: 'brown', eyes: 'blue' }

// function setValue(object, key, value) {
//   return object[key] = value;
// }
// setValue(newObj, 'height', 6.2);
// console.log(newObj)

// add a new key to an object by doing object.key = thenewvalue
// set the value by

// const dave = {
//   firstName: 'David',
//   lastName: 'Thomas'
// };

// function getKeys(object) {
//   var keys = [];
//   for (const property in object) {
//     keys.push(property);
//   }
//   return keys;
// }
// console.log(getKeys(dave));

// function getValues(object) {
//   var valuesAre = [];
//   for (var property in object) {
//     valuesAre.push(object[property]);
//   }
//   return valuesAre;
// }
// console.log(getValues(dave));


// function toObject(keyValuePair) {
//   var theObject = {};
//   theObject[keyValuePair[0]] = keyValuePair[1];
//   return theObject;
// }
// console.log(toObject(['isCool', true]));

// array at index 0 will be the property and at 1 will be the value
// take the array and assign 0 to an object, but u need an object
// create an empty object to which the items can be pushed to
// below that , push item one, or the property, then below that push
// ... item two, the value, using the below notation:
// property will be objectName  = (keyValuePair[0])
// value will be objectName.push()

// function head(array) {
//   return array[0];
// }

// function last(array) {
//   return array[array.length - 1];
// }

// function tail(array) {
//   var arrayTail = [];
//   for (var i = 1; i < array.length; i++) {
//     arrayTail.push(array[i]);
//   }
//   return arrayTail;
// }

// function initial(array) {
//   var arrayLessLast = [];
//   for (var i = 0; i < array.length -1; i++) {
//     arrayLessLast.push(array[i]);
//   }
//   return arrayLessLast;
// }

// function reverse(array) {
//   var arrayReversed = [];
//   for (var i = array.length -1; i >=0; i--) {
//     arrayReversed.push(array[i]);
//   }
//   return arrayReversed;
// }

