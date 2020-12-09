let wordArr = [],
    direction,
    num;

const newWordArr = [],
    text = prompt("영단어 숫자 방향 순으로 입력하세요. ( Ex: crong 2 L )");

function setInput() {
     let textArr = text.split(" ");
     wordArr = textArr[0].split("");
     direction = textArr[2];
     textArr[1] = Number(textArr[1]);
     num = textArr[1];
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
    }else if (direction === "R" || direction === "r") {
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

function init() {
    setInput();
    pushToDirection();
    const word = wordArr.join("");
    console.log(word);
    document.write(word);
}

init();
