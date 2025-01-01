// to handle binary data

const buffer1 = Buffer.from("Hello World", 'utf-8');
console.log(buffer1); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>


// Create a buffer of a fixed size
const buffer2 = Buffer.alloc(10); // Allocate 10 bytes, initialized to 0
console.log(buffer2); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buffer3 = Buffer.alloc(15);
buffer3.write("HI");
console.log(buffer3.toString("utf-8"));

// Concatenate Buffers
const b1 = Buffer.from("Hi ");
const b2 = Buffer.from("there");
const b = Buffer.concat([b1, b2]);
console.log(b.toString()); // Hi there
console.log(b.length); // 8
