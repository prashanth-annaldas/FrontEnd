function a(){
    var p=24;
    function b(){
        console.log(p);
    }
    return b;
}
var x=a();
console.log(x);
x();