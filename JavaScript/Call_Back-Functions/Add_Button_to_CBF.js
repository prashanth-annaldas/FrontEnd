function x(){
    var count=0;
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("ClickMe").addEventListener("click", function a() {
            console.log("Button Clicked",++count);
        });
    });
}
x();