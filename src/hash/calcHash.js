import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    // Write your code here
    try {
      const file = await readFile(__dirname + '/files/fileToCalculateHashFor.txt');
      const hash = createHash('sha256').update(file).digest('hex');
      console.log(`Hash: ${hash}`);
    } catch (err) {
      throw new Error(err);
    }
};

await calculateHash();