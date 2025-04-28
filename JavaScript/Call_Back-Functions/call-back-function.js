setTimeout(function (){
    console.log("Hello");
}, 3000);
function a(b){
    console.log("a");
    b();
}
a(function b(){
    console.log("b");
});