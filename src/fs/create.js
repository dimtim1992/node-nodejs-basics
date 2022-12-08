import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const create = async () => {
    // Write your code here
    const src = _dirname + '/files/fresh.txt';
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