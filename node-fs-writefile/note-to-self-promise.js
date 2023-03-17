import * as fs from 'node:fs/promises';

fs.writeFile('note.promise.txt', process.argv[2])
  .catch((err) => console.error(err));
