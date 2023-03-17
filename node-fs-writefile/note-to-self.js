import * as fs from 'node:fs';

fs.writeFile('note.txt', process.argv[2], (err, data) => {
  if (err) throw err;
});
