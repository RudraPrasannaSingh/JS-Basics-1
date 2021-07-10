/*
 * Creating arrays
 */
let scores = [20, 100, 53, 44, 21];
console.log(scores);
console.log(scores.length);

/*
 * Indexing arrays
 * 20 -> 0th index
 * 100 -> 1st index
 * 21 -> 4th index
 */
// console.log(scores[0]);  // 1st element
// console.log(scores[3]) // 4th element

/*
 * Iterative over arrays with forEach()
 *
 * 1st match income -> 1 x runs
 * 2nd match income -> 2 x runs
 * 3rd match income -> 3 x runs
 */
// scores.forEach(function (value, index, array) {
//   console.log(value * (index + 1));
// });

/*
 * Manipulating arrays
 */
// let scores = [20, 100, 53, 44, 21];

// updating elements
// scores[0] = 21; // replaces 20
// scores[10] = 0; // throws error as index 11 isn't availabel

// console.log(scores);

// adding new element to the end of array
// scores.push(0);
// console.log(scores);

// removing element from the end of the array
// scores.pop();
// console.log(scores);

/*
 * Passed by reference
 */
// let scores = [20, 100, 53, 44, 21];

//  1st match income -> 1 x runs
//  2nd match income -> 2 x runs
//  3rd match income -> 3 x runs
// function getMatchFees(scoresArray) {
//   scoresArray.forEach(function (value, index) {
//     scoresArray[index] = value * (index + 1);
//   });
//   return scoresArray;
// }

// console.log(getMatchFees(scores));
// console.log(scores);
