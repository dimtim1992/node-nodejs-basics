import { access, rename as newName } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    // Write your code here 
    const name = __dirname + '/files/properFilename.md';
    const wrongName = __dirname + '/files/wrongFilename.txt';
    const existText = 'FS operation failed';

    try {
      await access(name);
      throw new Error(existText);
    } catch (err) {
        try {
            if (err.message === existText) {
                throw new Error(err);
            }

            await newName(wrongName, name);
        } catch (e) {
            throw new Error(e);
        }
    }
};

await rename();