import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    // Write your code here 
    const readStream = createReadStream(__dirname + '/files/fileToRead.txt', 'utf-8');
    readStream.on('data', (data) => {
        process.stdout.write(data);
    });
};

await read();