const cart = ['shirts', 'pants', 'shoes'];

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentDetails){
        showOrderSummary(paymentDetails, function(){
            updateWallet();
        });
    });
});

// Using promises: 

// Definition of PROMISES: A Promise is an object that represents the eventual completion of an asynchronous operations.

createOrder(cart)
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentDetails){
        return showOrderSummary(paymentDetails);
    })
    .then(function(paymentDetails){
        return updateWallet(paymentDetails);
    });