let arr=[1,2,3,3,4,5,10,10];
let newArr= [];

for (let i = 0; i < arr.length; i++) {
    if(arr[i]==arr[i-1]) newArr.push(arr[i])
    else newArr.push(arr[i]*2);
}
console.log(arr);