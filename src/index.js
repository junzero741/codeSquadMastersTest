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

function rotateByU(i) {
    if(inputArray[i] === "U") {
        cubeTop = rotate90(cubeTop);
        rotateTop90();
        renderCube("U");
    }
}

function rotateTop90() {
    const tempArray1 = cubeFront.shift();
    const tempArray2 = cubeLeft.shift();
    const tempArray3 = cubeBack.shift();
    const tempArray4 = cubeRight.shift();
    cubeFront.unshift(tempArray4);
    cubeLeft.unshift(tempArray1);
    cubeBack.unshift(tempArray2);
    cubeRight.unshift(tempArray3);
}

function rotateByUQuote(i) {
    if(inputArray[i] === "U`") {
        cubeTop = rotateCounter90(cubeTop);
        rotateTopCounter90();
        renderCube("U`");
    } 
}

function rotateTopCounter90() {
    const tempArray1 = cubeFront.shift();
    const tempArray2 = cubeLeft.shift();
    const tempArray3 = cubeBack.shift();
    const tempArray4 = cubeRight.shift();
    cubeFront.unshift(tempArray2);
    cubeLeft.unshift(tempArray3);
    cubeBack.unshift(tempArray4);
    cubeRight.unshift(tempArray1);
}

function rotateByD(i) {
    if(inputArray[i] === "D") {
        cubeBottom = rotate90(cubeBottom);
        rotateBottom90();
        renderCube("D");
    }
}

function rotateBottom90() {
    const tempArray1 = cubeFront.pop();
    const tempArray2 = cubeLeft.pop();
    const tempArray3 = cubeBack.pop();
    const tempArray4 = cubeRight.pop();
    cubeFront.push(tempArray2);
    cubeLeft.push(tempArray3);
    cubeBack.push(tempArray4);
    cubeRight.push(tempArray1);
}


function rotateByDQuote(i) {
    if(inputArray[i] === "D`") {
        cubeBottom = rotateCounter90(cubeBottom);
        rotateBottomCounter90();
        renderCube("D`");
    }  
}

function rotateBottomCounter90() {
    const tempArray1 = cubeFront.pop();
    const tempArray2 = cubeLeft.pop();
    const tempArray3 = cubeBack.pop();
    const tempArray4 = cubeRight.pop();
    cubeFront.push(tempArray4);
    cubeLeft.push(tempArray1);
    cubeBack.push(tempArray2);
    cubeRight.push(tempArray3);
}

function rotateByL(i) {
    if(inputArray[i] === "L") {
        cubeLeft = rotate90(cubeLeft);
        rotateLeft90();
        renderCube("L");
    } 
}

function rotateLeft90() {
    // 배열 만들기
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
    
    // 배열 집어넣기
    for(let i = 0; i < 3; i++) {
        cubeTop[i].unshift(tempArrayBack[i]);
        cubeFront[i].unshift(tempArrayTop[i]);
        cubeBottom[i].unshift(tempArrayFront[i]);
        cubeBack[i].push(tempArrayBottom.pop());
    }
}

function rotateByLQuote(i) {
    if(inputArray[i] === "L`") {
        cubeLeft = rotateCounter90(cubeLeft);
        rotateLeftCounter90();
        renderCube("L`");
    }
}

function rotateLeftCounter90() {
    // 배열 만들기
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

    // 배열 집어넣기
   for(let i = 0; i < 3; i++) {
       cubeTop[i].unshift(tempArrayFront[i]);
       cubeFront[i].unshift(tempArrayBottom[i]);
       cubeBottom[i].unshift(tempArrayBack[i]);
       cubeBack[i].push(tempArrayTop.pop());
   }
}


function rotateByR(i) {
    if(inputArray[i] === "R") {
        cubeRight = rotate90(cubeRight);
        rotateRight90();
        renderCube("R");
    }
}

function rotateRight90() {
    // 배열 만들기
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

    // 배열 집어넣기
    for(let i = 0; i < 3; i++) {
        cubeTop[i].push(tempArrayFront[i]);
        cubeFront[i].push(tempArrayBottom[i]);
        cubeBottom[i].push(tempArrayBack[i]);
        cubeBack[i].unshift(tempArrayTop.pop());
    }
}

function rotateByRQuote(i) {
    if(inputArray[i] === "R`") {
        cubeRight = rotateCounter90(cubeRight);
        rotateRightCounter90();
        renderCube("R`");
    }
}

function rotateRightCounter90() {
    // 배열 만들기
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

    // 배열 집어넣기
    for(let i = 0; i < 3; i++) {
        cubeTop[i].push(tempArrayBack[i]);
        cubeFront[i].push(tempArrayTop[i]);
        cubeBottom[i].push(tempArrayFront[i]);
        cubeBack[i].unshift(tempArrayBottom.pop());
  }
}

function rotateByF(i) {
    if(inputArray[i] === "F")  {
        cubeFront = rotate90(cubeFront);
        rotateFront90();
        renderCube("F");
    }
}

function rotateFront90() {
    // 배열 만들기
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
    // 배열 집어넣기
    for(let i = 0; i < 3; i++) {
        cubeTop[2].unshift(tempArrayLeft[i]);
        cubeRight[i].unshift(tempArrayTop[i]);
        cubeLeft[i].push(tempArrayBottom[i]);
        cubeBottom[0].unshift(tempArrayRight[i]);
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

function renderCube(text) {
    const newCubeTop = document.createElement("div") , newCubeFront = document.createElement("div");
    const newCubeLeft = document.createElement("div"), newCubeRight = document.createElement("div");
    const newCubeBack = document.createElement("div"), newCubeBottom = document.createElement("div");
    newCubeTop.className = "canvasTop";
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