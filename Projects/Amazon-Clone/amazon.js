onload();
function onload(){
  showSelectorBar();
  displayItems();
}

function showSelectorBar(){
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
}

function displayItems(){
  let itemElements = document.querySelector('.itemsContainer');
  
  if(!itemElements) return;

  let innerHTML = '';
  items.forEach(item => {
    innerHTML +=`<div class="itemContainer">
                    <img class="itemImage" src="${item.item_image}" alt="item image">
                    <div class="rating">
                        ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
                    </div>
                    <div class="companyName">${item.company_name}</div>
                    <div class="itemName">${item.item_name}</div>
                    <div class="price">
                        <span class="currentPrice">Rs ${item.current_price}</span>
                        <span class="originalPrice">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount}% OFF)</span>
                    </div>
                    <button class="addToWishlist" onclick = "addToBag(${item.id});">Add to Bag</button>
                </div>`
  });
  itemElements.innerHTML = innerHTML;
}
