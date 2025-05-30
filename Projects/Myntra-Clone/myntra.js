let bagItems;
let bagItemStr = localStorage.getItem('bagItems');
bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
displayItemsOnHome();
displayBagCount();

function addToBag(items) {
    bagItems.push(items);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagCount();
}

function displayBagCount() {
    let bagItemsCountElements = document.querySelector('.itemBagCount');
    if(bagItems.length>0){
        bagItemsCountElements.style.visibility = 'visible';
        bagItemsCountElements.innerText = bagItems.length;
    }
    else{
        bagItemsCountElements.style.visibility = 'hidden';
    }
}

function displayItemsOnHome() {
    let itemContainerElement = document.querySelector('.itemsContainer');

    const items = [
        {
            id: '001',
            item_image: '/Images/Items/1 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '002',
            item_image: '/Images/Items/2 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '003',
            item_image: '/Images/Items/3 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '004',
            item_image: '/Images/Items/4 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '005',
            item_image: '/Images/Items/5 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '006',
            item_image: '/Images/Items/6 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '007',
            item_image: '/Images/Items/7 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },

        {
            id: '008',
            item_image: '/Images/Items/8 (1).jpg',
            rating: {
                stars: 4.5 ,
                noOfReviews: 2400,
            },
            company_name:'Carlton London',
            item_name:'Rodium-Plated CZ Floral Studs',
            current_price: 606,
            original_price: 1045,
            discount: 42,
        },
    ]

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