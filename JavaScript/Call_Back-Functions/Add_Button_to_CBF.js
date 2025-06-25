let count=0;
function onClick(a){
    a();
}
function a(){
    console.log('Button Clicked',++count);
}