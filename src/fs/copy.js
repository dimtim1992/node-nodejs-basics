import { access, mkdir, copyFile, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    // Write your code here
    const files = __dirname + '/files';
    const filesCopy = __dirname + '/files_copy';
    const existText = 'FS operation failed';

    try {
      await access(filesCopy);
      throw new Error(existText);
    } catch (err) {
      try {
        if (err.message === existText) {
            throw new Error(err);
        }

        const dirFiles = await readdir(files);
        await mkdir(filesCopy);
        await Promises.all(dirFiles.map(item => copyFile(`${files}/${item}`, `${filesCopy}/${item}`)));
      } catch (e) {
        throw new Error(e);
      }
    }

};

await copy();
