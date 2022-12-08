import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const remove = async () => {
    // Write your code here
    const src = _dirname + '/files/fileToRemove.txt';
    const existText = 'FS operation failed';

    try {
      await unlink(src);
    } catch (err) {
      throw new Error(existText);
    }
};

await remove();