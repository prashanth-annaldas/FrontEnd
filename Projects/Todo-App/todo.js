itemsList = [];
dateList = [];
displayItems();
function addItems(){
    let inputElements = document.querySelector('#search_bar');]
    itemsList.push(items);
    inputElements.value = '';
    
    let inputdate = document.querySelector('#date_bar');
    let dates = inputdate.value;
    dateList.push(dates);
    inputdate.value = '';
    if (items === '' || dates === '') {
        showToast("Please enter both a task and a date.");
        return ;
    }

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