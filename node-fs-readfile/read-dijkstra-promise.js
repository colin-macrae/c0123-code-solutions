import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL('dijkstra.txt', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}

// * reference: search "fsPromises.readFile(path[, options])" in documentation, https://nodejs.org/docs/latest/api/fs.html#fspromisesreadfilepath-options
