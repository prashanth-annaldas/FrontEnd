let selectorNavBar = document.querySelector(".selector_bar");

let navBarObj=[
  { text: "Fresh" },
  { text: "MX Player" },
  { text: "Sell" },
  { text: "Bestsellers" },
  { text: "Mobiles" },
  { text: "Today's Deals" },
  { text: "Prime" },
  { text: "Customer Service" },
  { text: "New Releases" },
  { text: "Electronics" },
  { text: "Fashion" },
  { text: "Home & Kitchen" },
  { text: "Amazon Pay" },
  { text: "Computers" },
  { text: "Books" },
  { text: "Car & Motorbikes" }
]

for(let i=0;i<navBarObj.length;i++){
    let aTag=document.createElement("a");
    aTag.innerText=navBarObj[i].text;
    selectorNavBar.appendChild(aTag);
}