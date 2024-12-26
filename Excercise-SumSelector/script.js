let arr=[1,2,3,3,-4,5,10,10];
let sum =0;

function sumNum(ar){
for (let i = 0; i < arr.length; i++) {
    if(arr[i]<0) break;
    else sum+=arr[i];

   }
   return sum;
}
console.log(arr);
let ans = sumNum(arr)
console.log(ans)