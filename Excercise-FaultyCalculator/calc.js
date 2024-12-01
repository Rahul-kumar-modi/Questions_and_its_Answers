let num = Math.random()
console.log(num)
let a = prompt("Enter 1st number")
let c = prompt("Enter your operation")
let b = prompt("Enter 2nd number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(num > 0.1){
    //Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}