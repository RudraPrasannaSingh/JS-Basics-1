/*
 * Write a function “add()” to add two numbers
 * - It should accepts three arguments: Two numbers for addition + Callback function
 * - Callback function prints to the console output of the addition
 */
function add(p1, p2, cb) {
  let res = p1 + p2;
  cb(res);
}

function cb(msg) {
  console.log("Result is: " + msg);
}
