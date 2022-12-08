import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    // Write your code here
    const src = __dirname + '/files/fresh.txt';
    const existText = 'FS operation failed';
    const fileText = "I am fresh and young";

    try {
      await access(src);
      throw new Error(existText);
    } catch (err) {
      try {
        if (err.message === existText) {
          throw new Error(err);
        }

        await writeFile(src, fileText);     
      } catch (e) {
        throw new Error(e.message);
      }   
    }
};

await create();