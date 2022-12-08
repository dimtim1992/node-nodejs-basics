import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here 
    const file = __dirname + '/files/fileToRead.txt';
    const existText = 'FS operation failed';

    try {
      const text = await readFile(file, 'utf8');
      console.log(text)
    } catch (err) {
      throw new Error(existText);
    }
};

await read();