/*
 * Look at the following code snippet. What do you think the output will be? Why?
 */

let x = 10; // globally scoped
function example() {
  let x = y = 20;

  if (x == 10) {
      y = 30;
  }

  return x;
}

// example();

let z = example(); // returns 20
// console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);
