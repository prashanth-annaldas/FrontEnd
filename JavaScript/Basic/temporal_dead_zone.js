console.log(x); // It will give Reference error bcz of x is NOT defined
console.log(a); // It will give Reference error because of it can't access a before initialization (Temporal Dead Zone)
let a=10;
const b=100;
b=200;
console.log(b); // It will give Type error bcz of Assignment to constant variable.
// const c; // It will give Syntax error
