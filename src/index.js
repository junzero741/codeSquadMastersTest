const input = document.getElementById("input"),
    button = document.getElementById("button");

let wordArr = [],
    direction,
    num;

const newWordArr = [];


function setInput() {
    const inputText = input.value;
    inputArray = inputText.split(" ");
    wordArr = inputArray[0].split("");
    direction = inputArray[2];
    inputArray[1] = Number(inputArray[1]);
    num = inputArray[1];
    checkNum();
}

function checkNum() {
    if (num < 0) {
        num = Math.abs(num);
        direction = changeDirection(direction);
    }
}

function changeDirection(text) {
    if (text === "L" || text === "l") {
        text = "R";
    } else if (text === "R" || text === "r") {
        text = "L";
    }
    return text;
}

function pushToDirection() {
    if (direction === "L" || direction === "l") {
        pushLeft(num);
    } else if (direction === "R" || direction === "r") {
        pushRight(num);
    }
}

function pushLeft(num) {
    for (let i = 0; i < num; i++) {
        wordArr.push(wordArr.shift());
    }
}

function pushRight(num) {
    for (let i = 0; i < num; i++) {
        wordArr.unshift(wordArr.pop());
    }
}

function handleEvent() {
    button.addEventListener("click", setInput);
    button.addEventListener("click", pushToDirection);
    button.addEventListener("click", renderAnswer);
}

function renderAnswer() {
    const answer = document.createElement("div");
    answer.className = "answer";
    const word = wordArr.join("");
    console.log(word);
    document.body.appendChild(answer);
    answer.innerHTML = word;
}

function init() {
    handleEvent();
}

init();
