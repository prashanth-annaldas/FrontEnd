// const API_URL = "https://api.github.com/users/prashanth-annaldas";               // This is the Valid of my GitHub 
const API_URL = "https:/HELLO";                                                     // this is the Invalid api 

async function fetchPromise(){
    // try{                                                 // Use try & catch block method or promise.catch()
    const data = await fetch(API_URL);
    const val = await data.json();
    console.log(val);
    // }
    // catch(err){
    //     console.log(err);
    // }
}
fetchPromise()
    .catch((err)=>{console.log(err);});             // This is the another method of catching the error!!