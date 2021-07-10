/*
 * Implement a function that creates a power function,  “makePowerFunction()”
 * - The outer function, “makePowerFunction()” should take the desired power, it returns the inner function
 * - The inner function,  accepts a number and returns the power of the number
 *   Use Math.pow(value, power)
 * - Use “makePowerFunction()” to return a function which returns square values of numbers 
 *   i.e, below code should print 25
 * 
 * let power = 2;
 * let square = makePowerFunction(power);
 * console.log(square(5));
 */

function makePowerFunction(p) {
  return function (val) {
    return Math.pow(val, p);
  };
}

let power = 2;
let square = makePowerFunction(power);

console.log(square(5));
