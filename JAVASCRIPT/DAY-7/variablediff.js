console.log("diff bet var, let and const");

// Declare with var
var num = 10;
console.log(num);

// Redeclare with var
var num = 20;
console.log(num);

// Using let (can't redeclare in the same scope)
let numLet = 10;
console.log(numLet);

// Uncommenting the below line will cause an error
// let numLet = 20; // Error: Cannot redeclare block-scoped variable

// Declare with const
const number = 10;
console.log(number);

// Uncommenting the below line will cause an error
// number = 20; // Error: Assignment to constant variable
