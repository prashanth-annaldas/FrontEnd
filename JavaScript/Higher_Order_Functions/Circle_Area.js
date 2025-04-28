const radius = [2 , 3, 5 ,1];

const Area = function(radius){
    return Math.PI*radius*radius;
}

const Circumference = function(radius){
    return 2*Math.PI*radius*radius;
}

const Diameter = function(radius){
    return 2*radius;
}

console.log(radius.map(Area));     //  This is the map Function 

const Calculate = function(radius,Formula){         //  This is the map Implimentation 
    const result = [];
    for(let i=0;i<radius.length;i++){
        result.push(Formula(radius[i]));
    }
    return result;
}

// console.log(Calculate(radius,Area));
console.log(Calculate(radius,Circumference));
console.log(Calculate(radius,Diameter));
