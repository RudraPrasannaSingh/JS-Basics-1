/**
 * Creating functions
 */

// Need for functions
let p1 = 10;
let p2 = 20;
console.log(p1 + p2);

let p3 = 5;
let p4 = 6;
console.log(p3 + p4);

// Function syntax
// function add(p1, p2) {
//   // Logic goes here
//   return p1 + p2;
// }

// console.log(add(p1, p2));
// console.log(add(p3, p4));

/*
 * Functions as first-class citizens
 */

// Function expression
// let myAddFn = function (p1, p2) {
//   return p1 + p2;
// };
// console.log(myAddFn(10, 20));

// Callback function - Example 1
// function math_op(p1, p2, fn) {
//   let output = fn(p1, p2);
//   return output;
// }

// let output = math_op(10, 20, add);
// console.log(output);

/*
 * How above code works?
 *
 * math_op(p1, p2, add) {
 *     let output = add(p1, p2); // output = 30
 *     return output;
 * }
 */

// function subtract(p1, p2) {
//   return p1 - p2;
// }

// console.log(math_op(p1, p2, subtract));

// Callback function - Example 2
// function cb(msg) {
//   console.log(msg);
// }

/**
 * validate(p1, p2, cb)
 * invoke callack function conditionally
 */
// function validate(p1, p2, callbackFn) {
//   if (p1 + p2 > 30) {
//     callbackFn("Success!");
//   } else {
//     callbackFn("Failure");
//   }
// }

// validate(10, 21, cb);

/*
  Closures
    Applications
    1. Return a customized function
    2. Simulate private functions
    3. Group code in logical chunks
*/
// function greet(name) {
//   let attached = ["friends", "buddies", "pals"];
//   function say() {
//     let rand = Math.floor(Math.random() * attached.length);
//     return "Hi " + name + ". Let us be " + attached[rand] + "!";
//   }

//   let res = say();
//   return res;
// }

// let greeting = greet("People");
// console.log(greeting);

/*
 * Arrow functions vs Function expressions
 */
// let functionExpression = function (p1, p2, p3) {
//   return p1 + p2 + p3;
// };

// let arrowFunction = (p1, p2, p3) => {
//   return p1 + p2 + p3;
// };

// let res = arrowFunction(1, 2, 3);
// console.log(res);

// Arrow functions - returns value by default
// let arrowFunction = (p1, p2, p3) => p1 + p2 + p3;

// let res = arrowFunction(1, 2, 3);
// console.log(res);

// Arrow functions - special case for single argument
// let runsFromSixesCount = (numSixes) => numSixes * 6;
// console.log(runsFromSixesCount(10));

/*
 * "undefined" and functions
 */
// let returnNothing = function () {
//   console.log("Hi");
// };

// let res = returnNothing();
// console.log(res);
