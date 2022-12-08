import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Script } from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
  let initiated = false;
  const chProcess = spawn('node', [`${__dirname}/files/script.js`, ...args.split(' ')])

  process.stdin.on('data', (message) => {
    chProcess.stdin.write(message);
  })
  
  process.stdout.on('data', (data) => {
    console.log(data.toString());

    if (!initiated) {
      console.log('Write smth to console');
      initiated = true;
    }
  })
};

// Put your arguments in function call to test this functionality
spawnChildProcess('--silent --all');
