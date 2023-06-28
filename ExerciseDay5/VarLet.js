function placeOrder(status){
    var msg="Order placed successfully";
    if(status){
        console.log("Inside",msg);
    }
    console.log("Outside",msg);
    }

placeOrder(false);