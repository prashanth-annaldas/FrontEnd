const cart = ['pant'];

const promise = createOrder(cart);

promise.then((orderId)=>{
    console.log(orderId);
});

function createOrder(cart){
    const prom = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            const err = new Error('Cart is not valid')
            reject(err);
        }
        orderId = '123';
        if(orderId){
            resolve(orderId);
        }
    });
    return prom;
}

function validateCart(cart){
    if(cart){
        return true;
    }
    return false;
}