const canvasTop = document.querySelector(".canvasTop"),
    canvasLeft = document.querySelector(".canvasLeft"),
    canvasFront = document.querySelector(".canvasFront"),
    canvasRight = document.querySelector(".canvasRight"),
    canvasBack = document.querySelector(".canvasBack"),
    canvasBottom = document.querySelector(".canvasBottom"),
    input = document.getElementById("input"),
    button = document.getElementById("button");

let cubeTop =   [["B","B","B"], 
                 ["B","B","B"],
                 ["B","B","B"]];

let cubeLeft =  [["W","W","W"], 
                ["W","W","W"],
                ["W","W","W"]];
            
let cubeFront = [["O","O","O"], 
                ["O","O","O"],
                ["O","O","O"]];
                
let cubeRight = [["G","G","G"], 
                ["G","G","G"],
                ["G","G","G"]];

let cubeBack = [["Y","Y","Y"], 
                ["Y","Y","Y"],
                ["Y","Y","Y"]];

let cubeBottom =[["R","R","R"], 
                ["R","R","R"],
                ["R","R","R"]];
