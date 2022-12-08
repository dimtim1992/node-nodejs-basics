import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    // Write your code here 
    const readStream = createReadStream(__dirname + '/files/fileToCompress.txt');
    const writeStream = createWriteStream(__dirname + '/files/archive.gz');
    const toGz = createGzip();
    
    readStream.pipe(toGz).pipe(writeStream);
};

await compress();