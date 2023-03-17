import * as fs from 'node:fs/promises';

try {
  const contents = await fs.readFile(process.argv[2], { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
