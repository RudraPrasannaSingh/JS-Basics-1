// dev.to/zhiyueyi/variable-declaration-in-javascript-var-let-or-const-1789

/*
 * 1. var - allows variables to be re-declared and updated
 */

var scores; // variable declared
scores = 100; // variable assigned a value

var scores = 200; // variable re-declared + re-assigned a value
scores = 200; // variable re-assigned a value

console.log(scores);

/*
 * 2. let - allows variables to be re-assigned
 */

// let scores; // variable declared
// scores = 100; // variable assigned a value

// let scores = 200; // trying to re-declare + re-assign a value
// scores = 200; // reassign value

// console.log(scores);

/*
 * 3. const - neither allows to re-declare nor re-assign
 */

// const scores; // variable declared
// scores = 100; // variable assigned a value

// const scores = 200; // trying to re-declare + re-assign a value
// scores = 200; // trying to re-assign a value

// console.log(scores);
