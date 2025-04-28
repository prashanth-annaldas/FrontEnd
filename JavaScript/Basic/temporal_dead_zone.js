console.log(x); // It will give Reference error
console.log(a); // It will give Reference error because of it can't access a before initialization (Temporal Dead Zone)
let a=10;
const b=100;
b=200;
console.log(b); // It will give Type error
// const c; // It will give Syntax error
