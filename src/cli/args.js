const parseArgs = () => {
    // Write your code here 
    process.argv.forEach((i, index, arr) => {
        if (i.indexOf('--') === 0 && arr[index + 1].indexOf('--') === -1) {
          console.log(`${i.replace('--', '')} is ${arr[index + 1]},`);
        }
    })
};

parseArgs();