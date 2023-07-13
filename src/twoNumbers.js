// getting a number between two values
console.log(Math.random());
// 0.3133948077430897
function getNumber( min, max ) {
    
    console.log(Math.random() * ( max - min ) + min) ;
}
getNumber(5, 10);

// let min = 5 and max = 10
// Math.random() = number between 0 and 1 = 0.3133948077430897
// 0.3133948077430897 * ( 10 - 5) = 0.3133948077430897 * 5 
// 0.3133948077430897 * 5 + 5 = 1.56695 + 5 = 6.56695
