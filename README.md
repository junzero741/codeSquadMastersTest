# 1단계: 단어 밀어내기 코드 구현


## 실행 화면 : 
https://codepen.io/junzero741/pen/PoGGbeq

</br></br>
## 코드 구상
  * prompt() 로 입력받은 문자열을 세 부분 (영단어, 숫자, 방향) 으로 나눠서 저장.
  * 영단어는 한 글자씩 쪼개서 배열에 저장.
  * 숫자는 prompt()로 입력받으면 문자열로 인식하니까 데이터 타입을 숫자로 변환.
  * 방향은 L, l, R, r 중 하나를 입력받는데, prompt()로 입력받은 숫자가 음수면 방향을 반대로 바꾸자.
  
  
  </br></br>
  ## setInput() 
  prompt로 입력받은 문자열을 textArr 배열에 세 구간으로 나누는 일을 한다. wordArr은 textArr의 [0]에 저장된 영단어를 한 글자씩 쪼개서 담는 배열이고, direction은 방향을, num은 숫자를 담는다.
   
  </br></br>
  ## checkMinus()
  num에 저장된 숫자가 음수면 num에 num의 양수값을 대신 저장하고, direction을 반대로 바꾸는 함수를 실행시킨다. 
 
  </br></br>
  ## changeDirection(text)
  checkMinus()에 의해 실행되는 함수로, 입력된 text가 L이나 l 이면 R로, R이나 r이면 L로 바꿔서 반환한다.
  
  </br></br>
  ## pushToDirection() 
  입력된 방향에 따라 pushLeft 혹은 pushRight 함수를 실행시킨다.
  
  </br></br>
  ## pushLeft(num) & pushRight(num)
  주어진 방향과 입력된 숫자에 따라 wordArr내의 원소들을 이동시킨다.
  
  </br></br>
  ## init()
  시작함수. wordArr 배열을 다시 문자열로 join 하는 기능도 들어있다.
  
  
