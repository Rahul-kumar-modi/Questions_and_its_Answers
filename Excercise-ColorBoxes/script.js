/*
1st method
console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let val1= Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
   e.style.backgroundColor = getRandomColor()
   e.style.Color = getRandomColor()
})
   
2nd method
box=document.querySelectorAll(".box");
for(let i=0;i<box.length;i++){
cur_box=box[i];
rand_bg="#"+Math.floor((Math.random()*1000000)+1);
cur_box.style.backgroundColor=rand_bg;
}
*/

// 3rd method
var boxes = document.querySelectorAll(".box");

for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];

    // Generate random color (16777215 is White in Decimal)
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Generate random background color
    var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Assign random color and background
    box.style.color = randomColor;
    box.style.backgroundColor = randomBackgroundColor;

    // Set content to show color code
    box.textContent = randomColor;
}
