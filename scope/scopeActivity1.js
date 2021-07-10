/*
 * Look at the following code snippet. What do you think the output will be? Why?
 */
// var x=30
function example() {
  let x = 10;
  // What happens when above is changed to let x = 10; ? Can you try it out?

  if (x == 10) {
     x = 20;
  }

  return x;
}

var z = example();
console.log(z);