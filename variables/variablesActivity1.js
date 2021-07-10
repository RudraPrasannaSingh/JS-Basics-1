/*
 * Try out and see what happens if you
 * - Re-declare var declared variable using var
 * - Re-declare var declared variable using let
 * - Re-declare let declared variable using var
 */
"use strict";

// Re-declare var declared variable using var
var scores = 100;
var scores; // doesn't throw error
console.log(scores);

// Re-declare var declared variable using let
// var scores = 100;
// let scores; // throws error
// console.log(scores);

// Re-declare let declared variable using var
// let scores = 100;
// var scores; // throws error
// console.log(scores);
