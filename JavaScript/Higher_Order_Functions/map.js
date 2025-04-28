const arr = [10,6,3,7,9];

function Double (x){
    return x*2;
}

function Binary(x){
    return x.toString(2);   //  Base=> 2 -> Binary , 8-> Octal , 10-> Decimal , 16-> Hexa Numbers
}

const D_result = arr.map(Double);

const T_result = arr.map((x)=>{         //  Inspite of =>   function Triple(x){}   ->   (x)=>{}
    return x*3;
});

const B_result = arr.map(Binary);

console.log(D_result);

console.log(T_result);

console.log(B_result);