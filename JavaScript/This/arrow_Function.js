// "use strict";

// function b(){
//     const obj = {
//         a:24,
//         x:()=>{
//             console.log(this);
//         }
//     }
//     obj.x();    // undefined
// }
// b();

const obj = {
    a:24,
    x:()=>{
        console.log(this);   // window
    }
}
obj.x();