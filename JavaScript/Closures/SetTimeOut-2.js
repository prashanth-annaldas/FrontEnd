function a(){
    for(var i=1;i<=5;i++){
        function b(x){
            setTimeout(function (){
                console.log(x);
            },i*1000);
        }
        b(i);
    }
}
a();