let a =Math.random();

async function brewCoffee(){
     return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve("Your coffee is ready! with order no. " + Math.ceil(a*1000))
            
        }, a*10000);
     })
}


async function item() {
    console.log(a);
    console.log("Placing the order for coffee....");
    
    let order = await brewCoffee()
    
    console.log(order);
    
}

item()
