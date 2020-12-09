let wordArr = [],
    direction,
    num;

const newWordArr = [],
    text = prompt("영단어 숫자 방향 순으로 입력하세요. ( Ex: crong 2 L )");

function setInput() {
     // 영단어 배열화
     let textArr = text.split(" ");
     wordArr = textArr[0].split("");
 
     // 방향 지정
     direction = textArr[2];
 
     // 숫자 검사
     textArr[1] = Number(textArr[1]);
     num = textArr[1];
     if (num < 0) {
         num = Math.abs(num);
         direction = ChangeDirection(direction);
     }
}

function init() {
    setInput();
}

init();
