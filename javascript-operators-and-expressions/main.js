var width = 2;
var height = 3;
var area = width * height;
console.log('area:', typeof area, area);

var bill = 4;
var payment = 5;
var change = payment - bill;
console.log('change:', typeof change, change);

var quizzes = 72;
var midterm = 95;
var final = 91;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', typeof grade, grade);

var firstName = 'Colin';
var lastName = ' Macrae';
var fullName = firstName + lastName;
console.log('full name:', typeof fullName, fullName);

var pH = 10;
var isAcidic = pH < 7;
console.log('Acidic?:', typeof isAcidic, isAcidic);

var headCount = 301;
var isSparta = headCount === 300;
console.log('Is Sparta:', typeof isSparta, isSparta);

var motto = fullName + ' aint the GOAT yo!';
console.log('Ur the GOAT?', typeof motto, motto);
