itemsList = [];
dateList = [];
displayItems();
function addItems(){
    let inputElements = document.querySelector('#search_bar');
    let items = inputElements.value;
    itemsList.push(items);
    inputElements.value = '';

    let inputdate = document.querySelector('#date_bar');
    let dates = inputdate.value;
    dateList.push(dates);
    inputdate.value = '';

    displayItems();
}
function displayItems(){
    let displaySearches = document.querySelector('#displayItems');
    newHtml = '';
    for(let i=0;i<itemsList.length;i++){
        newHtml += `
        <span class="searched_items" id="items">${itemsList[i]}</span>
        <span class="searched_items" id="dates">${dateList[i]}</span>
        <button class="searched_items" id="delete_button" onclick="itemsList.splice(${i},1); dateList.splice(${i},1); displayItems();">delete</button>`;
    }
    displaySearches.innerHTML = newHtml;
}