var colors = ['red ', 'white ', 'blue'];
console.log('value of colors:', colors[0]);
console.log('value of colors:', colors[1]);
console.log('value of colors:', colors[2]);

console.log('am colors:', 'America is ' + colors[0] + colors[1] + 'and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is:', 'Mexico is ' + colors[0] + colors[1] + 'and ' + colors[2] + '.');

var students = ['Lam', 'Devan', 'Colin', 'Bishon'];
var numberOfStudents = students.length;
console.log('Number of students:', 'There are ' + numberOfStudents + ' students in the class.');
var lastIndex = [numberOfStudents - 1];
var lastStudent = students[lastIndex];
console.log('Last student is:', 'The last student in the array is ' + lastStudent);
console.log('Student array console logged:', students);
