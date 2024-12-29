let str ="TreatmEntAIOU"
let count=0;
function vowels(char){
    const arr = char.split("")
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=='a' || arr[i]=='e' || arr[i]=='i' || arr[i]=='o' || arr[i]=='u' || arr[i]=='A' || arr[i]=='E' || arr[i]=='I' || arr[i]=='O' || arr[i]=='U')
             count++;
    }
    return count;
}

let a = vowels(str);
console.log(a);


