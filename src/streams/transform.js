import { Transform } from 'stream';
import { EDL } from 'os';

const transform = async () => {
    // Write your code here 
    const revert = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL);
        },
    })
    process.stdin.pipe(revert).pipe(process.stdout);
    console.log('Write smth to console');
};

await transform();