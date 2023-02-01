var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log('max val:', maximumValue);

var heroes = ['tom', 'jerry', 'mickey', 'minnie'];
var randomNumber = Math.random();
// console.log(randomNumber)
randomNumber = randomNumber * heroes.length;
// console.log(randomNumber)
var randomIndex = Math.floor(randomNumber);
console.log('random number:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

// ARRAY METHODS
var library = [
  {
    title: 'Mountain Biking',
    author: 'Peter Sagan'
  },
  {
    title: 'Road Cycling',
    author: 'MVDP'
  },
  {
    title: 'Gravel Cycling',
    author: 'Tom Pidcock'
  }
];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
library.push(js);

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.unshift(css);

library.splice(1, 1);
console.log('books:', library);

var fullName = 'Colin Macrae';
var firstAndLastName = fullName.split(' ');
console.log('first and last books:', firstAndLastName);

var firstName = firstAndLastName[0];
// console.log(firstName)

var sayMyName = firstName.toUpperCase();
console.log('please say my name with caps!:', sayMyName);
