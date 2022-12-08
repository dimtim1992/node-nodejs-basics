import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    // Write your code here
    const src = __dirname + '/files/fileToRemove.txt';
    const existText = 'FS operation failed';

    try {
      await unlink(src);
    } catch (err) {
      throw new Error(existText);
    }
};

await remove();