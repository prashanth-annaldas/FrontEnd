itemsList = [];
dateList = [];
displayItems();
function addItems() {
    let inputElements = document.querySelector('#search_bar');
    let items = inputElements.value.trim();
    let inputdate = document.querySelector('#date_bar');
    let dates = inputdate.value.trim();

    if (items === '' || dates === '') {
        showToast("Both item and date are required!");
        return;
    }

    itemsList.push(items);
    dateList.push(dates);
    inputElements.value = '';
    inputdate.value = '';
    displayItems();
}
function displayItems(){
    let displaySearches = document.querySelector('#displayItems');
    let newHtml = '';
    for(let i=0;i<itemsList.length;i++){
        newHtml += `
        <span class="searched_items" id="items">${itemsList[i]}</span>
        <span class="searched_items" id="dates">${dateList[i]}</span>
        <button class="searched_items" id="delete_button" onclick="itemsList.splice(${i},1); dateList.splice(${i},1); displayItems();">delete</button>`;
    }
    displaySearches.innerHTML = newHtml;
}
function showToast(message) {
    const toast = document.querySelector('.toast');
    toast.innerText = message;
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';

    setTimeout(function () {
        toast.style.opacity = '0';
        toast.style.visibility = 'hidden';
    }, 1000);
}