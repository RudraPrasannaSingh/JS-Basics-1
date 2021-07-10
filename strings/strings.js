"use strict"; // use strict mode

/*
 * Creating strings
 * - Single quotes
 * - Double quotes
 * - Backticks
 */
let singleQuoted = "Hi";
console.log(singleQuoted);

let doubleQuoted = "Hi";
console.log(doubleQuoted);

let backticked = `Hi`;
console.log(backticked);

console.log(doubleQuoted === backticked);

// Template strings
let crio = "Crio";
console.log(`Hi ${crio}`);
console.log("Hi ${crio}");

// Finding string length
console.log(crio.length);

// Strings are unmutable
// crio[0] = "T"; // throws error on trying to change string

crio = "Trio"; // allows re-assigning a "new" string to the variable
console.log(crio);

/*
 * Comparing strings - similar to dictionary order
 */
// "Ajay" before "Kiran" as "A" before "K"
console.log("Ajay" < "Kiran");

// "Kiran" before "Sridher" as "K" before "S"
console.log("Kiran" < "Sridher");

// "Sridher" not before "Pratik" as "S" after "P"
console.log("Sridher" < "Pratik");

// capital letters come before small letters
// check ASCII table - https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ASCII-Table-wide.svg/875px-ASCII-Table-wide.svg.png
console.log("Ajay" < "ajay");

/*
 * String manipulation - Lowercase, Uppercase
 */
crio = "Crio";

console.log(crio.toLowerCase());
console.log(crio.toUpperCase());
