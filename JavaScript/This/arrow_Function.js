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

// const obj = {
//     a:24,
//     x:()=>{
//         console.log(this);   // window
//     }
// };
// obj.x();

const obj1 = {
    a:24,
    x:function (){
        const obj2 = {
            y:()=>{
                console.log(this);  // this gives us like the object of the lexical context i.e obj1
            }
        }
        obj2.y();
    },
};
obj1.x();