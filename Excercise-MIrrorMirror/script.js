function reverseString(str) {
    
    const arrayStrings = str.split("");
    
    // reverse the new created array elements
    
    const reverseArray = arrayStrings.reverse();
    
    // join all elements of the array into a string
    
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    
    return joinArray;
    
}



const string = prompt('Enter a string: ');

const result = reverseString(string) + string;

console.log(result);




