var student = {
  firstName: 'Colin',
  lastName: ' Macrae',
  age: 21
};

var fullName = student.firstName + student.lastName;
console.log('full name:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'professional cyclist';
console.log('residence and occupation:', student.livesInIrvine, student.previousOccupation);
// console.log(student)

var vehicle = {
  make: 'BMW',
  model: 'seven-series',
  year: 2023
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('car color:', vehicle['color']);
console.log('convertible?:', vehicle['isConvertible']);
console.log('car profile:', vehicle);

var pet = {
  name: 'Puppers',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log(pet);
