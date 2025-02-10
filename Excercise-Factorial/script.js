let a =6;

//1st method
function factorial(number){
    let arr = Array.from(Array(number+1).keys())  // --> Printing number from 1 to n
    // console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a ,b)=>{
        return a*b
    })
    //    console.log(c)
       return c
}

factorial(a) //--> Format For printing 10 line  c
console.log(factorial(a)) //--> Format For printing 11 line  c

//2nd method
function facfor(number){
    let fact =1 ;
    for (let index = 1; index <=  number; index++) {
         fact = fact * index;
        
    }
    return fact
    // console.log(fact)
}

facfor(a) //--> Format For printing 25 line  fact
console.log(facfor(a))  //--> Format For printing 24 line  fact