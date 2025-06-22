const p = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise is Success');
    }, 5000);
});

async function usingAwait(){
    // console.log('Hey Iam Prashanth');            // It will executes Quickly!
    const res = await p;                            // It will waits for the promise to be resolving then it will executes all the lines after this.
    console.log('HELLO WROLD!!');
    console.log(res);
}
usingAwait();

// function usingThen(){                            // Using (then) keyword, it will waits for NON, it Quickly executes!
//     p.then((res)=>{
//         console.log(res);
//     });
//     console.log('Hey JavaScript');
// }
// usingThen();