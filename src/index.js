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


function checkInput() {
    for(let i=0; i < inputArray.length; i++) {
        moveCube(i)
     }
}

function moveCube(i) {
    if(inputArray[i] === "U") {
        cube[0].push(cube[0].shift());
        renderCube("U");
    }
    if(inputArray[i] === "U`") {
        cube[0].unshift(cube[0].pop());
        renderCube("U`");
    }
    if(inputArray[i] === "B") {
        cube[2].unshift(cube[2].pop());
        renderCube("B`");
    }
    if(inputArray[i] === "B`") {
        cube[2].push(cube[2].shift());
        renderCube("B");
    }
    if(inputArray[i] === "R") {
        const temp = cube[0].pop();
        cube[0].push(cube[1].pop());
        cube[1].push(cube[2].pop());
        cube[2].push(temp);
        renderCube("R");
    }
    if(inputArray[i] === "R`") {
        const temp = cube[2].pop();
        cube[2].push(cube[1].pop());
        cube[1].push(cube[0].pop());
        cube[0].push(temp);
        renderCube("R`");
    }
    if(inputArray[i] === "L") {
        const temp = cube[2].shift();
        cube[2].unshift(cube[1].shift());
        cube[1].unshift(cube[0].shift());
        cube[0].unshift(temp);
        renderCube("L");
    }
    if(inputArray[i] === "L`") {
        const temp = cube[0].shift();
        cube[0].unshift(cube[1].shift());
        cube[1].unshift(cube[2].shift());
        cube[2].unshift(temp);
        renderCube("L`");
    }
    if(inputArray[i] === "Q") {
        document.write("BYE~");
    }
}

function renderCube(text) {
    const newCube = document.createElement("div");
    newCube.className = "rectangle";
    newCube.innerHTML = `${text} <br> ${cube[0]} <br> ${cube[1]} <br> ${cube[2]}`; 
    document.body.appendChild(newCube);
}


function handleEvent() {
    button.addEventListener("click", mergeSingleQuote);
    button.addEventListener("click", checkInput);
}

function init() {
    canvas.innerHTML =  `${cube[0]} <br> ${cube[1]} <br> ${cube[2]}`; 
    handleEvent();
    checkInput();
}

init();