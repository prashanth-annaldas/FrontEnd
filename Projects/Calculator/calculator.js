let currentdisplay='';
document.querySelector('#display').value = currentdisplay;

function displayupdate(value){
        currentdisplay+=value;
        document.querySelector('#display').value=currentdisplay;
}

function cleardisplay(){
        currentdisplay='';
        document.querySelector('#display').value=currentdisplay;       
}

function calculateNumbers(){
        currentdisplay = eval(currentdisplay);
        document.querySelector('#display').value=currentdisplay;
}