import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    // Write your code here
    const src = __dirname + '/files';
    const existText = 'FS operation failed';

    try {
      const files = await readdir(src);
      files.forEach(item => console.log(item))
    } catch (err) {
      throw new Error(existText);
    }
};

await list();