import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    // Write your code here 
    const readStream = createReadStream(__dirname + '/files/archive.gz');
    const writeStream = createReadStream(__dirname + '/files/fileToCompress.txt');
    const fromGz = createGzip();

    readStream.pipe(fromGz).pipe(writeStream);
};

await decompress();