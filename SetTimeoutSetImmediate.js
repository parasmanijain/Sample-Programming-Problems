setTimeout(() => console.log('A'), 0); // Macrotask
setImmediate(() => console.log('B')); // Macrotask in Node.js