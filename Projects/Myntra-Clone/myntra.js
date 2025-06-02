let bagItems;
onLoad();
function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHome();
    displayBagCount();
}

function addToBag(itemId) {
    if(!bagItems.includes(itemId)){
        bagItems.push(itemId);
        localStorage.setItem('bagItems',JSON.stringify(bagItems));
        displayBagCount();
        alert('Item added to bag ✅');
    }
    else{
        alert('Item is already in the bag ⚠️');
    }
}

function displayBagCount() {
    let bagItemsCountElements = document.querySelector('.itemBagCount');
    if(bagItems.length > 0){
        bagItemsCountElements.style.visibility = 'visible';
        bagItemsCountElements.innerText = bagItems.length;
    }
    else{
        bagItemsCountElements.style.visibility = 'hidden';
    }
}

function displayItemsOnHome() {
    let itemContainerElement = document.querySelector('.itemsContainer');
    
    if(!itemContainerElement){
        return ;
    }
    innerHTML = '';
    items.forEach(item=>{
        innerHTML += `<div class="itemContainer">
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

    itemContainerElement.innerHTML = innerHTML;
}