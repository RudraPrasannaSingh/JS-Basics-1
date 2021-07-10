/*
 * You are given the array, “arr”.
 * Print out the array of elements where each element of new array is
 *    sum of the current element and the previous element of “arr”.
 * If prev element doesn’t exist (eg: index 0), return the same element
 *
 * Index 0: 1 + 0 => 1
 * Index 1: 2 + 1 => 3
 * Index 2: 3 + 2 => 5
 * ...
 */

let arr = [1, 2, 3, 4, 5];
let outputArr = [];

for (let i = 0; i < arr.length; i++) {
  // check if index is 0
  if (i === 0) {
    outputArr.push(arr[i]);
  } else {
    let currElement = arr[i];
    let prevElement = arr[i - 1];
    let currValue = currElement + prevElement;

    outputArr.push(currValue);
  }
}

console.log(outputArr); // should print [1, 3, 5, 7, 9]