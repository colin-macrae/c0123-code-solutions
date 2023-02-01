function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Number of seconds:', convertMinutesToSeconds(1));

function greet(name) {
  return 'Hello ' + name + '!';
}
console.log('Greeting:', greet('Mike'));

function getArea(width, height) {
  return width * height;
}
console.log('Area:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('First name:', getFirstName({ firstName: 'Colin', lastName: 'Macrae' }));

function getLastElement(array) {
  var lastItem = array.length - 1;
  return array[lastItem];

}
console.log(getLastElement(['bread', 'cheese', 'ham', 'mayo']));
