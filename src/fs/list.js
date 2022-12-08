import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const list = async () => {
    // Write your code here
    const src = _dirname + '/files';
    const existText = 'FS operation failed';

    try {
      const files = await readdir(src);
      files.forEach(item => console.log(item))
    } catch (err) {
      throw new Error(existText);
    }
};

await list();