function handleSubmit(){
    let amount = document.getElementById('input_amount').value;
    let percentage = document.getElementById('input_percentage').value;
    let months = document.getElementById('months').value;

    if(amount.length > 0 && percentage.length > 0 && months > 0){
        let profit = ((percentage / 100) * amount) * months;
        let total_amount = Number(amount) + profit;

        document.getElementById('profit').innerText = profit;
        document.getElementById('amount').innerText = amount;
        document.getElementById('total').innerText = total_amount;
    }
    else{
        document.getElementById('profit').innerText = 0;
        document.getElementById('amount').innerText = 0;
        document.getElementById('total').innerText = 0;
        let toast = new bootstrap.Toast(
            document.getElementById('errorToast')
        );
        toast.show();
        setTimeout(()=>{
            toast.hide();
        }, 3000);
    }
    document.getElementById('input_amount').value = "";
    document.getElementById('input_percentage').value = "";
    document.getElementById('months').value = "";
}