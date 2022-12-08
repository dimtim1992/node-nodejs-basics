import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const read = async () => {
    // Write your code here 
    const file = _dirname + '/files/fileToRead.txt';
    const existText = 'FS operation failed';

    try {
      const text = await readFile(file, 'utf8');
      console.log(text)
    } catch (err) {
      throw new Error(existText);
    }
};

await read();