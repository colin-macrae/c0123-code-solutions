var books = [
  {
    isbn: '1234567',
    title: 'book one',
    author: 'author one'
  },
  {
    isbn: '234567',
    title: 'book two',
    author: 'author two'
  },
  {
    isbn: '34567',
    title: 'book three',
    author: 'author three'
  }
];
console.log('books array:', typeof books, books);

console.log('books JSON stringified:', typeof JSON.stringify(books), JSON.stringify(books));

console.log('student JSON stringified:', typeof ['{ "id": 567, "name": "Jon Doe" }], [{ "id": 567, "name": "Jon Doe" }']);

console.log('student parsed:', typeof JSON.parse('{ "id": 567, "name": "Jon Doe" }'), JSON.parse('{ "id": 567, "name": "Jon Doe" }'));
