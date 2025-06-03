const CONVENIENCE_FEES = 99;
let bagItemsObjects;
onLoad();

function onLoad(){
    loadBagItemObjects();
    displayBagItems();
    bagSummaryDetails();
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
                                        <div class="returnPeriod">
                                            <span class="returnPeriodDays">${item.return_period} days</span> return available
                                        </div>
                                        <div class="deliveryDetails">
                                            Delivery by
                                            <span class="deliveryDetailsDays">${item.delivery_date}</span>
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
    bagSummaryDetails();
}
function bagSummaryDetails(){

    let bagSummaryElements = document.querySelector('.bagSummary');
    
    if(bagItemsObjects.length === 0){
        bagSummaryElements.innerHTML = '';
        return ;
    }

    let totalItem = bagItemsObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemsObjects.forEach(bagItem=>{
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    let innerHTML = `<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
                <span class="price-item-tag">Total MRP</span>
                <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Discount on MRP</span>
                <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
            </div>
            <div class="price-item">
                <span class="price-item-tag">Convenience Fee</span>
                <span class="price-item-value">₹99</span>
            </div>
            <hr>
            <div class="price-footer">
                <span class="price-item-tag">Total Amount</span>
                <span class="price-item-value">₹${finalPayment}</span>
            </div>
        </div>
        <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
        </button>`;
    bagSummaryElements.innerHTML = innerHTML;
}