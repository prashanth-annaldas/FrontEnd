function a(){
    // for(var i=1;i<=5;i++){              // This gives wrong output bcz, it is a var type so it reference to the same spot of memory
    //     setTimeout(function (){
    //         console.log(i);
    //     }, i*1000);
    // }
    console.log("Hello, Iam Learning JavaScript");
    for(let i=1;i<=5;i++){              // This gives correct output
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
}
a();