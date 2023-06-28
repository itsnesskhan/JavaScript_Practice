const Cart = ["Shoes", "Pants","Kurta"];

//callbacks
// createOrderApi(Cart, function(){
//     makePaymentApi(orderId);
// });


//promises  
createOrderApi(Cart)
    .then((orderId)=>{
        console.log("OrSder placed Successfully!")
        // console.log(orderId)
        
        return orderId
    })
    .catch((error)=>{
        console.log(error.message)
    })
    .then((orderId)=>{
        return makePaymentApi(orderId)
    })
    .catch((error)=>{
        console.log(error.message)
    })
.then((data) => {
    console.log(data)
    console.log("no matter what happend, i wil be called")
})
.catch((error)=>{
    console.log(error.message)
})





function createOrderApi(Cart){
    let ps = new Promise(function(resolve, reject){
        
        if(!validateCart(Cart)){
            let err = new Error("Card is not valid")
            reject(err)
        }else{
            resolve(123)

        }
    })

    return ps;
}


function makePaymentApi(orderId){
    let ps = new Promise(function(resolve, reject){
        if(orderId!=null){
            resolve("Payment Successfull!")

        }else{
            let err = new Error("Payment Faild")
            reject(err)
        }    
    })
    return ps;
}


function validateCart(Cart){
    return false;
}