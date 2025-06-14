function x(){
    let count=0;
    document.getElementById("ClickMe").addEventListener("click", function a() {
        console.log("Button Clicked",++count);
    });
}
x();