# 2단계: 평면 큐브 구현
</br></br>
## 실행 화면
https://codepen.io/junzero741/pen/ZEppKWe
</br></br>
## 코드 구상
  * HTML 화면에 초기 큐브를 div 태그를 활용해서 그리자.
  * 텍스트를 입력할 공간과 입력한 텍스트를 제출할 버튼을 input 태그를 활용해서 그리자.
  * 평면 큐브는 [2][2] 칸의 2차원 배열이므로, 초기 큐브를 2차원 배열을 활용해서 그리자.
  * 빈칸에 입력한 텍스트를 한 글자씩 나눠서 배열에 넣으면 루프를 돌면서 한 글자씩 검사를 할 수 있겠다.
  * 배열 내 원소에 따라 배열 메서드를 적절히 활용해 2차원 배열을 수정하고, 그때마다 화면에 수정한 큐브를 그리자.
  
 </br></br>
 ## mergeSingleQuote
  * input 빈칸에 입력한 텍스트를 한 글자씩 나눠 배열 inputArray에 저장한다.
  * inputArray 배열을 돌면서 원소 중에 Singlequote ( \` ) 가 있으면 바로 이전의 원소와 합치고,  해당 원소( \` )는 삭제한다.
  
 </br></br>
 ## checkInput
  * inputArray 의 길이만큼 moveCube 함수를 실행한다.
  
 </br></br>
  ## moveCube(i)
  * i는 0에서부터 inputArray 의 길이 직전까지 늘어난다.
  * inputArray 의 i 번째 원소에 따라 각기 다른 큐브 이동 로직을 갖고, renderCube(text) 함수를 실행시킨다.
  * inputArray 의 원소 중 "Q"가 있으면 프로그램을 종료하고 "BYE" 를 출력한다.
   </br></br>
  ## renderCube(text)
  * document 객체에 div 태그를 갖는 새로운 상수 newCube 를 생성한다.
  * newCube에 "rectangle" 클래스 이름을 부여한다. (CSS 적용을 위해)
  * newCube 의 내부를 moveCube로 이동한 2차원 배열 큐브로 채운다. (큐브 위에는 입력한 text 표시)
  </br></br>
  ## handleEvent
  * 버튼에 이벤트 함수를 모아둔 함수다.
   </br></br>
  ## Init
  * 코드를 시작하는 시작함수다.
  * 초기 큐브를 그린다.
  * handleEvent함수와 checkInput 함수를 실행한다.
  
