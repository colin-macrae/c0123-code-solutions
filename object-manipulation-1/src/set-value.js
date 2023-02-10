/* exported setValue */
// const dave = { firstName: 'David' };

function setValue(object, key, value) {
  object[key] = value;
  return value;
}
// console.log(setValue(dave, lastName, 'smith'));

// when you set a new key and value on an object, you do this:
// object.newkey = soandso;
// for example:

// const dave = { firstName: 'David' };
// dave.lastName = 'smith';
// console.log(dave);

// you need to create a function that does this.

// the code at the top seems it should work but I am
// ..unsure why it does not
