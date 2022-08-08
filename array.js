const arrayLength = function(arr) {
    return arr.length;
}
const len = arrayLength([1, 2, 3, 4, 5]);
console.log(len);

let multiply = function(x, y) {
    return `${x} * ${y} = ${x*y}`;
}

module.exports = arrayLength;
module.exports.multiply = multiply;



