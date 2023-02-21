function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var exConstVar = new ExampleConstructor();
console.log(exConstVar);
console.log(exConstVar instanceof ExampleConstructor);
