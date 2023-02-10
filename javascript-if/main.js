/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else { return false; }
}
// console.log(isUnderFive(6))

function isEven(number) {
  if ((number % 2) === 1) {
    return false;
  } else { return true; }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else { return false; }
}

// var Cecilia = {
//   name: 'Cecilia',
//   age: 73
// }

function isOldEnoughToDrink(person) {
  if (person.age > 20) {
    return true;
  } else { return false; }
}
// console.log(isOldEnoughToDrink(colin))

// var luke = {
//   name: 'colin',
//   age: 18
// }

function isOldEnoughToDrive(person) {
  if (person.age > 15) {
    return true;
  } else { return false; }
}

// console.log(isOldEnoughToDrive(luke))

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'pH is neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'pH is acid';
  } else if (pH < 14 && pH >= 7) {
    return 'pH is acid';
  } else return 'invalid pH level';
}
// console.log(categorizeAcidity(15))

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the Warner Brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else return 'Goodnight everybody!';
}
