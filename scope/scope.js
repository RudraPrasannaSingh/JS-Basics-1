"use strict";

// https://scotch.io/tutorials/understanding-scope-in-javascript

/* 
 * Global scope is accessible from everywhere
 */

var x = 2; // Global scope
// let x = 2; // Global scope
// const x = 2; // Global scope

if (true === true) {
    console.log("Inside if block: ", x)
}

function scope() {
    console.log("Inside function: ", x);
}

scope()

/*
 * Global vs block scope
 */

// Case 1 - var is globally scoped and not block scoped

// if (true) {
//   // Block scope
//   var y = 5;
//   console.log("Inside block scope: ", y);
// }

// console.log("Inside global scope: ", y);


// Case 2 - let/const is block scoped

// if (true) {
//   // Block scope
//   let y = 5;
//   console.log("Inside block scope: ", y);
// }

// console.log("Inside global scope: ", y);



/*
 * Function vs Block scope
 */

// Case 1 - var is function scoped

// function scope(x) {
//   // Function scope

//   if (x === 2) {
//     // Block scope
//     var y = 5;
//     console.log("Inside block scope: ", y);
//   }

//   console.log("Inside function scope: ", y);
// }

// scope(2);

// console.log("Inside global scope: ", y);


// Case 2 - let/const is block scoped

// function scope(x) {
//   // Function scope

//   if (x === 2) {
//     // Block scope
//     let y = 5;
//     console.log("Inside block scope: ", y);
//   }

//   console.log("Inside function scope: ", y);
// }

// scope(2);

// console.log("Inside global scope: ", y);