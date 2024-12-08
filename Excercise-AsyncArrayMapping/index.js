//1st method
let arr = [1, 2, 3, 4, 5, 6]
let newArr = []
async function sum() {
    return new Promise((resolve, reject) => {
        setInterval(() => {             
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * 2)
                
        }
        resolve(newArr)
    }, 500);
    })
}

async function main() {
    let data = await sum()

    console.log(data);
}

main()

//2nd method
let arr1 = [1, 2, 3, 4, 5, 6]
let newArr1 = []

async function sum() {
  for (let i = 0; i < arr1.length; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        newArr1.push(arr1[i] * 2);
        resolve();
      }, 500);
    });
  }
  return newArr1;
}

async function main() {
  let data = await sum();
  console.log(data);
}

main();

  
