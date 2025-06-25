const arr = [3,2,5,8,6];

function result_sum(x){                                 // Using For Loop
    let sum=0;
    for(let i=0; i<x.length; i++){
        sum+=x[i];
    }
    return sum;
}

console.log(result_sum(arr));

const result = arr.reduce(function(acc, curr){          // Using Reduce function
    return acc + curr; 
}, 0);

console.log(result);

//Maximum value using For Loop and Reduce function
// const arr = [3,2,5,8,6];

function result_max(x){                                 // Using For Loop
    let max1=0;
    for(let i=0; i<x.length; i++){
        if(max1<x[i]){
            max1=x[i];
        }
    }
    return max1;
}

console.log(result_max(arr));

const result_maximum = arr.reduce(function(acc, curr){          // Using Reduce function
    if(curr > acc){ 
        return curr; 
    }
    return acc;
}, 0);

console.log(result_maximum);