/*
 * Write an arrow function “isEven()” to check for even numbers
 * - It should accepts one argument: number to check if even or not (assume number greater than 1)
 * - Should return true if number is even otherwise false
 */

// Arrow functions
let isEven = num => {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
} 

console.log(isEven(10))
console.log(isEven(3));


// Shorter version
// let isEven = (num) => num % 2 === 0;

// console.log(isEven(10));
// console.log(isEven(3));