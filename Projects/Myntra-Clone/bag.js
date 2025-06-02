let bagItemsObjects;
onLoad();

function onLoad(){
    loadBagItemObjects();
    displayBagItems();
}

function loadBagItemObjects() {
    console.log(bagItems);
    bagItemsObjects = bagItems.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemsObjects);
}

function displayBagItems(){
    let bagItemElements = document.querySelector('.bagItemsContainer');
    let innerHTML = '';
    bagItemsObjects.forEach(item => {
        innerHTML += `<div class="bagItemContainer">
                                    <div class="itemLeftPart">
                                        <img class="bagItemImage"src="${item.item_image}" alt="Item 1">
                                    </div>
                                    <div class="itemRightPart">
                                        <div class="companyName">${item.company_name}</div>
                                        <div class="itemName">${item.item_name}</div>
                                        <div class="price">
                                            <span class="currentPrice">${item.original_price}</span>
                                            <span class="originalPrice">${item.current_price}</span>
                                            <span class="discount">${item.discount}% OFF</span>
                                        </div>
                                    </div>
                                    <div class="remove_item" onclick="removeItem(${item.id})">X</div>
                                </div>`;
    });
    bagItemElements.innerHTML = innerHTML;
}
function removeItem(itemId){
    const index = bagItems.indexOf(itemId);
    if(index !== -1){
        bagItems.splice(index,1);
    }
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagCount();
    displayBagItems();
}