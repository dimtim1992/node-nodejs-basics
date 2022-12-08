import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const cp = cpus();
    let num = 10;
    const workerResults = await Promises.allSettled(cp.map(() => {
        return new Promise((res, rej) => {
            const worker = new Worker(__dirname + '/worker.js', {
                workerData: num++
            })
            worker.on('message', message => res(message));
            worker.on('error', message => res(message));
        })
    }))

    const results = workerResults.map(item => {
        status: item.status === 'fulfilled' ? 'resolved' : 'error'
        data: item.status === 'fulfilled' ? item.value : null
    });

    console.log(results);

    return results;
};

await performCalculations();