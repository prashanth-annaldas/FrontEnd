// for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i); 
//     }, i * 1000);
// }
// console.log("hi");


// let button = document.querySelector("#button");
// button.addEventListener("click",()=>{
//     console.log("button clicked")
// })

// let divTag = document.querySelector("#divTag");
// divTag.style.border = "1px solid black";
// divTag.style.padding = "10px"
// // ✅ Create a real <div> element
// let innerDiv = document.createElement("div");
// // innerDiv.style.padding = "10px"
// innerDiv.style.backgroundColor = "green"
// // ✅ Append it to divTag
// divTag.appendChild(innerDiv);

// let name = 'uday';

// let innerTags = `
//     <h1>This is a normal simple website, ${name}</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt quae labore odit doloremque fugit recusandae sit hic esse dicta. Repellendus labore ex voluptatibus quam doloremque aut accusamus tempore officia nobis iste, ipsa a quaerat! Maxime magni eius illum reiciendis nulla unde quod dolorem excepturi eos ex quisquam placeat repellendus assumenda aut ratione sunt, veritatis blanditiis. Vel adipisci iusto cumque porro culpa, harum beatae facilis mollitia pariatur ex delectus, doloribus excepturi ullam sit aspernatur ad corporis nulla tenetur, atque rerum molestias illo earum recusandae voluptatem! Eligendi sit fuga quos commodi autem mollitia! Blanditiis veniam officiis ipsam veritatis ad nulla non.</p>
// `;

// // ✅ Set innerHTML of the real div
// innerDiv.innerHTML = innerTags;


//currying

let outerFunction = function(x){
    return function(y){
        console.log("x ",x,"y ",y);
        return x+y; 
    }
}
let localFunction = outerFunction(5);
console.log(localFunction(4))
