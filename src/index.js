const canvasTop = document.querySelector(".canvasTop"),
    canvasLeft = document.querySelector(".canvasLeft"),
    canvasFront = document.querySelector(".canvasFront"),
    canvasRight = document.querySelector(".canvasRight"),
    canvasBack = document.querySelector(".canvasBack"),
    canvasBottom = document.querySelector(".canvasBottom"),
    input = document.getElementById("input"),
    button = document.getElementById("button");

let cubeTop = [["B", "B", "B"],
["B", "B", "B"],
["B", "B", "B"]];

let cubeLeft = [["W", "W", "W"],
["W", "W", "W"],
["W", "W", "W"]];

let cubeFront = [["O", "O", "O"],
["O", "O", "O"],
["O", "O", "O"]];

let cubeRight = [["G", "G", "G"],
["G", "G", "G"],
["G", "G", "G"]];

let cubeBack = [["Y", "Y", "Y"],
["Y", "Y", "Y"],
["Y", "Y", "Y"]];

let cubeBottom = [["R", "R", "R"],
["R", "R", "R"],
["R", "R", "R"]];

let inputArray = [];


function drawInitCube() {
    canvasTop.innerHTML = `${cubeTop[0]} <br> ${cubeTop[1]} <br> ${cubeTop[2]} <br>`;
    canvasLeft.innerHTML = `${cubeLeft[0]} <br> ${cubeLeft[1]} <br> ${cubeLeft[2]} `;
    canvasFront.innerHTML = `${cubeFront[0]} <br> ${cubeFront[1]} <br> ${cubeFront[2]} `;
    canvasRight.innerHTML = `${cubeRight[0]} <br> ${cubeRight[1]} <br> ${cubeRight[2]} `;
    canvasBack.innerHTML = `${cubeBack[0]} <br> ${cubeBack[1]} <br> ${cubeBack[2]} `;
    canvasBottom.innerHTML = `${cubeBottom[0]} <br> ${cubeBottom[1]} <br> ${cubeBottom[2]} `;
}


function moveCube(i) {
    rotateByU(i);
    rotateByUQuote(i);
    rotateByD(i);
    rotateByDQuote(i);
    rotateByL(i);
    rotateByLQuote(i);
    rotateByR(i);
    rotateByRQuote(i);
    rotateByF(i);
    rotateByFQuote(i);
    rotateByB(i);
    rotateByBQuote(i);
    endCube(i);
}


function mergeSingleQuote() {
    const inputText = input.value;
    inputArray = inputText.split("");
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "`") {
            inputArray[i - 1] = inputArray[i - 1] + "`";
            inputArray.splice(i, 1);
        }
        if (inputArray[i] === "2") {
            inputArray[i] = inputArray[i - 1];
        }
    }
}

function checkInput() {
    for (let i = 0; i < inputArray.length; i++) {
        moveCube(i);
    }
    console.log(inputArray);
}


function handleEvent() {
    button.addEventListener("click", mergeSingleQuote);
    button.addEventListener("click", checkInput);
}



function init() {
    drawInitCube();
    handleEvent();
}


init();