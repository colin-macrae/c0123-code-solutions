import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('./random.txt', data, (err) => {
  if (err) throw err;
  Math.random();
});

// reference: search "fs.writeFile(file, data[, options], callback)" in https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback
