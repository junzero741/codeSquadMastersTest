const canvasTop = document.querySelector(".canvasTop"),
    canvasLeft = document.querySelector(".canvasLeft"),
    canvasFront = document.querySelector(".canvasFront"),
    canvasRight = document.querySelector(".canvasRight"),
    canvasBack = document.querySelector(".canvasBack"),
    canvasBottom = document.querySelector(".canvasBottom"),
    input = document.getElementById("input"),
    button = document.getElementById("button"),
    scrambleButton = document.getElementById("scramble");

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
let clock = setInterval(countClock, 1000);
let inputArray = [];
let submitCount = 0;

let second = 0;
let minute = 0;

function countClock() {
    if(second === 59) {
        second = 0;
        minute++;
    } else {
        second++;
    }
    console.log(`${
        minute < 10 ? `0${minute}` : minute} : ${
            second < 10 ? `0${second}` : second}`
    );
}

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



function rotateByU(i) {
    if(inputArray[i] === "U") {
        rotateTop90();
        renderCube("U");
    }
}
function rotateByUQuote(i) {
    if(inputArray[i] === "U`") {
        rotateTopCounter90();
        renderCube("U`");
    } 
}
function rotateByD(i) {
    if(inputArray[i] === "D") {
        rotateBottom90();
        renderCube("D");
    }
}
function rotateByDQuote(i) {
    if(inputArray[i] === "D`") {
        rotateBottomCounter90();
        renderCube("D`");
    }  
}
function rotateByL(i) {
    if(inputArray[i] === "L") {
        rotateLeft90();
        renderCube("L");
    } 
}
function rotateByLQuote(i) {
    if(inputArray[i] === "L`") {
        rotateLeftCounter90();
        renderCube("L`");
    }
}
function rotateByR(i) {
    if(inputArray[i] === "R") {
        rotateRight90();
        renderCube("R");
    }
}
function rotateByRQuote(i) {
    if(inputArray[i] === "R`") {
        rotateRightCounter90();
        renderCube("R`");
    }
}
function rotateByF(i) {
    if(inputArray[i] === "F")  {
        rotateFront90();
        renderCube("F");
    }
}
function rotateByFQuote(i) {
    if(inputArray[i] === "F`") {
        rotateFrontCounter90();
        renderCube("F`");
    }
}
function rotateByB(i) {
    if(inputArray[i] === "B") {
        rotateBack90();
        renderCube("B");
    }
}
function rotateByBQuote(i) {
    if(inputArray[i] === "B`") {
        rotateBackCounter90();
        renderCube("B`");
    }
}
function endCube(i) {
    if(inputArray[i] === "Q") {
        renderBye();
    }
}



function rotateTop90() {
    cubeTop = rotate90(cubeTop);
    const tempArrayFront= cubeFront.shift();
    const tempArrayLeft = cubeLeft.shift();
    const tempArrayBack = cubeBack.shift();
    const tempArrayRight = cubeRight.shift();
    cubeFront.unshift(tempArrayRight);
    cubeLeft.unshift(tempArrayFront);
    cubeBack.unshift(tempArrayLeft);
    cubeRight.unshift(tempArrayBack);
}

function rotateTopCounter90() {
    cubeTop = rotateCounter90(cubeTop);
    const tempArrayFront= cubeFront.shift();
    const tempArrayLeft = cubeLeft.shift();
    const tempArrayBack = cubeBack.shift();
    const tempArrayRight = cubeRight.shift();
    cubeFront.unshift(tempArrayLeft);
    cubeLeft.unshift(tempArrayBack);
    cubeBack.unshift(tempArrayRight);
    cubeRight.unshift(tempArrayFront);
}

function rotateBottom90() {
    cubeBottom = rotate90(cubeBottom);
    const tempArrayFront= cubeFront.pop();
    const tempArrayLeft = cubeLeft.pop();
    const tempArrayBack = cubeBack.pop();
    const tempArrayRight = cubeRight.pop();
    cubeFront.push(tempArrayLeft);
    cubeLeft.push(tempArrayBack);
    cubeBack.push(tempArrayRight);
    cubeRight.push(tempArrayFront);
}

function rotateBottomCounter90() {
    cubeBottom = rotateCounter90(cubeBottom);
    const tempArrayFront= cubeFront.pop();
    const tempArrayLeft = cubeLeft.pop();
    const tempArrayBack = cubeBack.pop();
    const tempArrayRight = cubeRight.pop();
    cubeFront.push(tempArrayRight);
    cubeLeft.push(tempArrayFront);
    cubeBack.push(tempArrayLeft);
    cubeRight.push(tempArrayBack);
}

function rotateLeft90() {
    cubeLeft = rotate90(cubeLeft);
    let tempArrayTop = [];
    let tempArrayFront = [];
    let tempArrayBottom = [];
    let tempArrayBack = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[i].shift());
        tempArrayFront.push(cubeFront[i].shift());
        tempArrayBottom.push(cubeBottom[i].shift());
        tempArrayBack.unshift(cubeBack[i].pop());
    }
    for(let i = 0; i < 3; i++) {
        cubeTop[i].unshift(tempArrayBack[i]);
        cubeFront[i].unshift(tempArrayTop[i]);
        cubeBottom[i].unshift(tempArrayFront[i]);
        cubeBack[i].push(tempArrayBottom.pop());
    }
}

function rotateLeftCounter90() {
    cubeLeft = rotateCounter90(cubeLeft);
    let tempArrayTop = [];
    let tempArrayFront = [];
    let tempArrayBottom = [];
    let tempArrayBack = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[i].shift());
        tempArrayFront.push(cubeFront[i].shift());
        tempArrayBottom.push(cubeBottom[i].shift());
        tempArrayBack.unshift(cubeBack[i].pop());
    }
   for(let i = 0; i < 3; i++) {
       cubeTop[i].unshift(tempArrayFront[i]);
       cubeFront[i].unshift(tempArrayBottom[i]);
       cubeBottom[i].unshift(tempArrayBack[i]);
       cubeBack[i].push(tempArrayTop.pop());
   }
}

function rotateRight90() {
    cubeRight = rotate90(cubeRight);
    let tempArrayTop = [];
    let tempArrayFront = [];
    let tempArrayBottom = [];
    let tempArrayBack = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[i].pop());
        tempArrayFront.push(cubeFront[i].pop());
        tempArrayBottom.push(cubeBottom[i].pop());
        tempArrayBack.unshift(cubeBack[i].shift());
    }
    for(let i = 0; i < 3; i++) {
        cubeTop[i].push(tempArrayFront[i]);
        cubeFront[i].push(tempArrayBottom[i]);
        cubeBottom[i].push(tempArrayBack[i]);
        cubeBack[i].unshift(tempArrayTop.pop());
    }
}

function rotateRightCounter90() {
    cubeRight = rotateCounter90(cubeRight);
    let tempArrayTop = [];
    let tempArrayFront = [];
    let tempArrayBottom = [];
    let tempArrayBack = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[i].pop());
        tempArrayFront.push(cubeFront[i].pop());
        tempArrayBottom.push(cubeBottom[i].pop());
        tempArrayBack.unshift(cubeBack[i].shift());
    }
    for(let i = 0; i < 3; i++) {
        cubeTop[i].push(tempArrayBack[i]);
        cubeFront[i].push(tempArrayTop[i]);
        cubeBottom[i].push(tempArrayFront[i]);
        cubeBack[i].unshift(tempArrayBottom.pop());
  }
}

function rotateFront90() {
    cubeFront = rotate90(cubeFront);
    let tempArrayTop = [];
    let tempArrayBottom = [];
    let tempArrayLeft = [];
    let tempArrayRight = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[2].shift());
        tempArrayLeft.push(cubeLeft[i].pop());
        tempArrayRight.push(cubeRight[i].shift());
        tempArrayBottom.push(cubeBottom[0].shift());
    }
    for(let i = 0; i < 3; i++) {
        cubeTop[2].unshift(tempArrayLeft[i]);
        cubeRight[i].unshift(tempArrayTop[i]);
        cubeLeft[i].push(tempArrayBottom[i]);
        cubeBottom[0].unshift(tempArrayRight[i]);
    }
}

function rotateFrontCounter90() {
    cubeFront = rotateCounter90(cubeFront);
    let tempArrayTop = [];
    let tempArrayBottom = [];
    let tempArrayLeft = [];
    let tempArrayRight = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[2].pop());
        tempArrayLeft.push(cubeLeft[i].pop());
        tempArrayRight.push(cubeRight[i].shift());
        tempArrayBottom.push(cubeBottom[0].pop());
    }
    for(let i = 2; i >= 0; i--) {
       cubeTop[2].unshift(tempArrayRight[i]);
       cubeRight[i].unshift(tempArrayBottom[i]);
       cubeLeft[i].push(tempArrayTop[i]);
       cubeBottom[0].unshift(tempArrayLeft[i]);
   }
}

function rotateBack90() {
    cubeBack = rotate90(cubeBack);
    let tempArrayTop = [];
    let tempArrayBottom = [];
    let tempArrayLeft = [];
    let tempArrayRight = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[0].pop());
        tempArrayLeft.push(cubeLeft[i].shift());
        tempArrayRight.push(cubeRight[i].pop());
        tempArrayBottom.push(cubeBottom[2].pop());
    }
    for(let i = 0; i < 3; i++) {
     cubeTop[0].push(tempArrayRight[i]);
     cubeLeft[i].unshift(tempArrayTop[i]);
     cubeRight[i].push(tempArrayBottom[i]);
     cubeBottom[2].push(tempArrayLeft[i]);
    }
 }

 function rotateBackCounter90() {
    cubeBack = rotateCounter90(cubeBack);
    let tempArrayTop = [];
    let tempArrayBottom = [];
    let tempArrayLeft = [];
    let tempArrayRight = [];
    for(let i = 0; i < 3; i++) {
        tempArrayTop.push(cubeTop[0].shift());
        tempArrayLeft.push(cubeLeft[i].shift());
        tempArrayRight.push(cubeRight[i].pop());
        tempArrayBottom.push(cubeBottom[2].shift());
    }
    for(let i = 2; i >= 0; i--) {
       cubeTop[0].push(tempArrayLeft[i]);
       cubeLeft[i].unshift(tempArrayBottom[i]);
       cubeRight[i].push(tempArrayTop[i]);
       cubeBottom[2].push(tempArrayRight[i]);
    }
}



function rotate90(matrix) {
    matrix = transpose(matrix);
    matrix.map(function (array) {
        array.reverse();
    });
    return matrix;
}

function rotateCounter90(matrix) {
    let result = createEmptyMatrix(matrix.length);
    matrix = transpose(matrix);
    let counter = 0;

    for (let i = matrix.length - 1; i >= 0; i--) {
        result[counter] = matrix[i];
        counter++;
    }
    return result;
}

function transpose(matrix) {
    let len = matrix.length;
    let result = createEmptyMatrix(len);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let temp = matrix[i][j];
            result[j][i] = temp;
        }
    }
    return result;
}

function createEmptyMatrix(len) {
    let result = new Array();
    for (let i = 0; i < len; i++) {
        result.push([]);
    }
    return result;
}


function completeCube() {
    let answerCount = 0;
    if(document.querySelector(".newCanvasTop")) {
        const cubeArray = [cubeTop, cubeBottom, cubeLeft, cubeRight, cubeFront, cubeBack];
        for(let i = 0; i < cubeArray.length; i++) {
           answerCount += checkCube(cubeArray[i]);
        }
    }
    if(answerCount === 48) {
        renderCompleteBye();
    }
}

function checkCube(matrix) {
    let corretCount = 0;
    flatArray = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            flatArray.push(matrix[i][j]);
        }
    }
    for(let i = 0; i < flatArray.length; i++) {
        if(flatArray[i] === flatArray[i+1]) {
            corretCount++;
        }  
    }
    return corretCount; // 한 면의 블럭들(9개)의 값이 모두 일치하면 8 반환.
}


function renderCompleteBye() {
    clearInterval(clock);
    document.write(`경과시간 : ${
        minute < 10 ? `0${minute}` : minute} : ${
        second < 10 ? `0${second}` : second} <br> 
        조작갯수 : ${submitCount} <br>
        🎺모든 면을 맞추셨습니다 축하합니다!!🎺`);
}

function renderBye() {
    clearInterval(clock);
    document.write(`경과시간 : ${
        minute < 10 ? `0${minute}` : minute} : ${
        second < 10 ? `0${second}` : second} <br> 
        조작갯수 : ${submitCount} <br> 이용해주셔서 감사합니다. 뚜뚜뚜.`);
}

function renderCube(text) {
    const newCubeTop = document.createElement("div") , newCubeFront = document.createElement("div");
    const newCubeLeft = document.createElement("div"), newCubeRight = document.createElement("div");
    const newCubeBack = document.createElement("div"), newCubeBottom = document.createElement("div");
    newCubeTop.className = "newCanvasTop";
    newCubeFront.className = "canvasFront";
    newCubeLeft.className = "canvasLeft";
    newCubeRight.className = "canvasRight";
    newCubeBack.className = "canvasBack";
    newCubeBottom.className = "canvasBottom";
    newCubeTop.innerHTML = `${text} <br> ${cubeTop[0]} <br> ${cubeTop[1]} <br> ${cubeTop[2]} <br>`; 
    newCubeLeft.innerHTML = `${cubeLeft[0]} <br> ${cubeLeft[1]} <br> ${cubeLeft[2]} `; 
    newCubeFront.innerHTML = `${cubeFront[0]} <br> ${cubeFront[1]} <br> ${cubeFront[2]} `; 
    newCubeRight.innerHTML = `${cubeRight[0]} <br> ${cubeRight[1]} <br> ${cubeRight[2]} `; 
    newCubeBack.innerHTML = `${cubeBack[0]} <br> ${cubeBack[1]} <br> ${cubeBack[2]} `; 
    newCubeBottom.innerHTML = `${cubeBottom[0]} <br> ${cubeBottom[1]} <br> ${cubeBottom[2]}  `; 
    const newCubeFaces = [newCubeTop, newCubeLeft, newCubeFront, newCubeRight, newCubeBack, newCubeBottom];
    for(let i = 0; i < newCubeFaces.length; i++) {
        document.body.appendChild(newCubeFaces[i]);   
    } 
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
    submitCount += inputArray.length;
}

function scrambleCube() {
    let rotateArray = [rotateTop90, rotateRight90, rotateLeft90, rotateFront90, rotateBottom90, rotateBack90];
    let randomNum = Math.random() * 10;

    rotateArray.sort(function () {
        return Math.random() - Math.random();
    });

    for(let i = 0; i < randomNum; i++) {
        rotateArray.forEach(element => element());
    }
    drawInitCube();
}

function handleEvent() {
    button.addEventListener("click", mergeSingleQuote);
    button.addEventListener("click", checkInput);
    button.addEventListener("click", completeCube);
    scrambleButton.addEventListener("click", scrambleCube);
}


function init() {
    drawInitCube();
    handleEvent();
    
}


init();