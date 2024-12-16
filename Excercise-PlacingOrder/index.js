let a =Math.random();

async function placeorder(){
     return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve("Your order is placed! with order no. " + Math.ceil(a*1000))
            
        }, a*10000);
     })
}


async function item() {
    console.log(a);
    console.log("Placing the order....");
    
    let order = await placeorder()
    
    console.log(order);
    
}

item()
