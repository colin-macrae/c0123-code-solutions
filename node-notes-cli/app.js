import * as fs from 'node:fs';
import * as fsP from 'node:fs/promises';

const parsedData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const request = process.argv[2];

handler(request);
function handler(action) {
  if (request === 'read') {
    for (const property in parsedData.notes) {
      console.log(`${property}: ${parsedData.notes[property]}`);
    }
  } else if (request === 'create') {
    parsedData.notes[parsedData.nextId] = process.argv[3];
    parsedData.nextId += 1;
    fsP.writeFile('data.json', JSON.stringify(parsedData, null, 2));
  } else if (request === 'update') {
    const id = process.argv[3];
    if (parsedData.notes[id]) {
      parsedData.notes[id] = process.argv[4];
      fsP.writeFile('data.json', JSON.stringify(parsedData, null, 2));
    } else {
      console.log('That note ID currently does not exist');
    }
  } else if (request === 'delete') {
    const id = process.argv[3];
    if (parsedData.notes[id]) {
      delete parsedData.notes[id];
      fsP.writeFile('data.json', JSON.stringify(parsedData, null, 2));
    } else {
      console.log('That note ID currently does not exist');
    }
  } else {
    console.log('Invalid request.  Please type "read" or "create" or "update or "delete"');
  }
}
