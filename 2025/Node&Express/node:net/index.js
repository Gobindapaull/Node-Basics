const net = require('node:net');

const server = net.createServer((socket) => {
  socket.write('Hello Client!\n');
  socket.on('data', (data) => {
    console.log('Client Said', data.toString());
  });
});

server.listen(3000, () => {
  console.log('Server is running at port 3000');
});

// nc localhost 3000
// node:net হলো Node.js এর একটি বিল্ট-ইন (অর্থাৎ ইনস্টল করতে হয় না) মডিউল, যা দিয়ে তুমি TCP (Transmission Control Protocol) বা IPC (Inter-Process Communication) ভিত্তিক সার্ভার ও ক্লায়েন্ট তৈরি করতে পারো।
