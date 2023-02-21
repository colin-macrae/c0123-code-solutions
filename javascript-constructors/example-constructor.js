function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var exConstVar = new ExampleConstructor();
console.log(exConstVar);
console.log(exConstVar instanceof ExampleConstructor);

// what is new here?  new is going to create a new object by using the constructor instead of creating it the other way ur used to
// instance of is checking if our new object has an instance of the exampleconstructor constructor, and in this case it does
