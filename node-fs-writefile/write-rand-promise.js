import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello LFZ'));
writeFile('./random.txt', data)
  .then((value) => Math.random());

// reference: search "filehandle.writeFile(data, options)" in https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback
