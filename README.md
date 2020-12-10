# 3단계: 루빅스 큐브 구현
</br></br>
## 실행 화면
https://codepen.io/junzero741/pen/MWjjzdx
</br></br>
## 코드 구상
  * 코드의 각 면을 2차원 배열로 생성하고, 화면에 그린 div를 상수 객체로 불러온다.
  * 2단계에서 만들었던 mergeSingleQuote 함수를 숫자 2도 입력받을 수 있게끔 수정한다.
  * 빈칸에 입력한 텍스트를 한 글자씩 나눠서 배열에 삽입한다.
  * 텍스트 배열을 순환, 한 글자씩 검사해서 큐브의 면을 회전시킨다. 
  * 큐브가 회전했다는 것은 한 글자에 맞는 명령을 수행했다는 뜻이므로, 회전한 큐브를 화면에 렌더링한다.
   </br></br>
 </br></br>
# 유틸리티 함수

 ## drawInitCube 
 * 화면에 초기 큐브를 렌더링하는 함수이다.
 * DOM 객체로 불러온 큐브의 각 면을 2차원 배열로 채워넣었다.

 ## mergeSingleQuote
 * 빈칸에 입력한 텍스트를 한 글자씩 새로운 배열 inputArray에 넣는다.
 * for문을 돌면서 배열을 검사하는데, 해당 원소가 singlequote( \` ) 면 앞의 문자와 합치고, 숫자 2 면 앞의 문자로 바꾼다.

 ## checkInput
 * inputArray의 길이만큼 for문을 돌면서 moveCube(i) 함수를 실행한다.
 * 무엇을 입력했는지 알 수 있게끔 콘솔에 inputArray를 출력한다.
 * inputArray의 길이는 사용자가 입력한 텍스트의 길이와 같으므로, submitCount에 inputArray의 길이를 더한다.

 ## handleEvent
 * 버튼을 클릭할 때마다 이벤트를 발생시키는 함수를 모아두었다.
 * 버튼을 클릭하면 mergeSingleQuote 와 checkInput이 실행된다.

 ## moveCube(i)
 * checkInput 함수에 의해 실행되는 함수.
 * i 값에 따라 각기 다른 회전 함수를 실행시키는 중앙 제어 역할을 한다.


 ## endCube(i)
 * inputArray의 원소 i 중에 "Q"가 있으면 renderBye 함수를 실행시킨다.

 ## renderBye
 * 화면에 큐브 회전 명령 횟수인 submitCount와 작별인사를 출력하고, 큐브 게임을 종료시킨다.

 ## renderCube(text)
 * 각 층별 회전 함수에 의해 실행되는 함수.
 * 큐브가 회전할 때마다 화면에 새로운 큐브를 렌더링하는 역할을 한다.
 * 렌더링된 함수의 위엔 입력된 text를 함께 출력한다.


   </br></br> </br></br>
 # 큐브 단면 회전 함수

 ## rotate90(matrix)
 * 매개변수로 입력받은 2차원배열 matrix를 90도 회전시키는 함수이다.
 * matrix에 transpose를 적용시킨다.
 * transpose가 적용된 matrix의 원소들(2차원배열이므로 배열 안의 배열)을 map 함수를 이용해 뒤집어준다.
 * 90도 회전한 matrix를 반환한다.

 ## transpose(matrix)
 * 변수 len 에 matrix의 길이(큐브의 길이 = 3) 을 저장한다.
 * 변수 result 에 createEmptyMatrix(len) 을 저장한다.
 * 0부터 matrix의 길이(3)직전까지 커지는 첫 번째 for문과, 0부터 matrix의 i번째 인덱스의 원소 (배열 안의 배열)의 길이까지 커지는 두 번째 for문을 만든다.
 * 이중 for문을 돌면서 변수 temp 를 생성, temp 안에 matrix의 i번째의 j번째 원소를 넣는다.
 * result 의 j번째의 i번째 원소에는 temp를 저장한다.
 * result 를 반환한다.

 ## createEmptyMatrix(len)
 * result 변수에 새로운 배열을 생성한다.
 * 0부터 len직전까지 (여기선 3) 까지 커지는 for 문을 돌면서, result 빈 배열에 빈 배열을 푸시한다.
 * result 배열을 반환한다. 

  ## rotateCounter90(matrix)
 * result 변수에 matrix의 길이만한 2차원 빈배열 (3xn)을 넣는다.
 * matrix는 transpose로 2차원 배열 자체를 오른쪽으로 회전시킨다.
 * 2에서 0까지 for문을 돌면서 result 배열에 matrix 배열을 대입한다.

    </br></br> </br></br>
 # 큐브 층별 회전 함수

 ## rotateBy U,U\`,D,D\`,L,L\`,R,R\`, ...(i)
 * i에 따라 해당 큐브 단면(2차원 배열)을 rotate90(matrix) 함수로 회전시킨다.
 * i에 따라 각기 다른 rotate 함수를 실행시킨다.
 * i에 따라 각기 다른 renderCube 함수를 실행시킨다.
 
 ## rotate Top,Bottom,TopCounter,TopBottom
 * 임시 배열 tempArray 에 회전으로 의해 블럭 위치가 변경되는 배열들만 shift() 또는 pop() 으로 집어넣는다.
 * shift() 또는 pop() 으로 인해 자리가 빈 곳에 회전해 들어오는 배열이 저장된 tempArray 를 넣는다.

 ## rotate Left, Right, LeftCounter, RightCounter, Front, Back, ...
 * 회전으로 인해 위치가 변경되는 블럭들을 담을 배열들을 만든다.
 * 배열의 크기만큼 for문을 돌면서 자리가 빈 곳에 회전해 들어오는 배열이 저장된 tempArray를 넣는다.
 * 그러나 큐브의 전개도를 다루고 있기 때문에, 큐브 뒷면을 거치는 블럭은 push 또는 unshift 방향이 반대임을 유의한다.
 