import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    // Write your code here 
    const writeStream = createWriteStream(__dirname + '/files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        writeStream.write(data.toString());
    });
    console.log('Write smth to console and check it in fileToWrite.txt');
};

await write();