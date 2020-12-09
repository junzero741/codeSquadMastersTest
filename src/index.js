const canvas = document.querySelector(".rectangle"),
    input = document.getElementById("input"),
    button = document.getElementById("button");
let cube =  [["R","R","W"], 
            ["G", "C", "W"],
            ["G", "B", "B"]];
let inputArray = [];



function mergeSingleQuote() {
    const inputText = input.value;
    inputArray = inputText.split("");
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === "`") {
            inputArray[i-1] = inputArray[i-1] + "`";
            inputArray.splice(i,1);
        }
    }
    console.log(inputArray);
} 


function handleEvent() {
    button.addEventListener("click", mergeSingleQuote);
}

function init() {
    canvas.innerHTML =  `${cube[0]} <br> ${cube[1]} <br> ${cube[2]}`; 
    handleEvent();
}

init();