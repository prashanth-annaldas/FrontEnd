const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1 is Success');
    },3000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('p2 is Success');
        reject('p2 is rejected');
    },1000);
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p3 is Success');
    },2000);
});

Promise.all([p1,p2,p3])
    .then((res)=>{
        console.log(res);
    }
    )
    .catch((err)=>{
        console.error(err);
    });