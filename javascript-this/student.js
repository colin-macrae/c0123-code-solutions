/* exported student */
var student = {
  firstName: 'colin',
  lastName: 'macrae',
  subject: 'JS',
  getFullName: function () {
    // console.log(this.firstName);
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    // console.log(this.getFullName());
    return 'Hello, my name is' + ' ' + this.firstName + ' ' + this.lastName + ' ' + 'and I am studying' + ' ' + this.subject + '.';
  }
};
