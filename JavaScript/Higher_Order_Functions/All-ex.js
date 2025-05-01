const c = [
    { firstName: "Prashanth", lastName:  "Annaldas", age:  19},
    { firstName: "Virat", lastName: "Kohli", age:  37},
    { firstName: "Rohit", lastName:  "Sharma", age:  37},
    { firstName: "MS", lastName:  "Dhoni", age:  43},
];

const result1 = c.map((a)=> a.firstName+" "+a.lastName);

console.log(result1);

const result2 = c.reduce (function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;  
},{});

console.log(result2);

const result3 = c.filter((b)=>b.age<=37).map((d)=>d.firstName);

console.log(result3);