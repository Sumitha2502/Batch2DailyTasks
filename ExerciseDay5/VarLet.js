function placeOrder(status){
    var msg="Order placed successfully";
    if(status){
        console.log("Inside",msg);
    }
    console.log("Outside",msg);
    }

placeOrder(false);





//for loop ref:https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript