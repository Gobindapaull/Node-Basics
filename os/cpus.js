const os = require("os");
const cluster = require("cluster");

const osLength = os.cpus().length;
console.log(osLength);

// if (cluster.isMaster) {
//     for (let i = 0; i < osLength; i++) {
//         console.log(cluster.fork()); 
//     }
// }
