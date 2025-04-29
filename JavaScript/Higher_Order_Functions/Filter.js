const arr = [4,5,2,3,11];

function isEven(x){
    return x % 2===0;
}

function isOdd(x){ 
    return x % 2;
} 

function Greater(x){
    return x > 3;
}
const E_result = arr.filter(isEven); 
const O_result = arr.filter(isOdd);
const G_result = arr.filter(Greater);

console.log(E_result);
console.log(O_result);
console.log(G_result);