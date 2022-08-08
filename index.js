const arr = require('./array');


console.log('888Acutions'); // 888Acutions
console.log(__dirname);  // I:\VSCODE
console.log(__filename);  // I:\VSCODE\index.js

for( i = 0; i < 5; i++) {
    console.log(i);
}
// 0 1 2 3 4 5

setTimeout(() => {console.log('setTimeout function')}, 2000);

function buy() {
    console.log('price: 0.1 eth');
}
buy();

// or

const buyPrice = function() {
    console.log('buyPrice: 0.1 eth');
}
buyPrice();

// function as a param

function call(func) {
    func();
}
call(buyPrice);

// array length
console.log(arr(['abc', 'bcd', 'def']));
// multiply two numbers
console.log(arr.multiply(2, 3));