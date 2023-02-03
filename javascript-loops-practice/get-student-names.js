/* exported getStudentNames */
// var studentList = [{ name: "Kristian" }, { name: "Henry" }, { name: "Brenda" }]

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

// console.log("studentList exercise:", getStudentNames(studentList));
