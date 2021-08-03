### 17_makeLastSeenMsg

***

###### 문제 

사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴해야 합니다.

##### 입력

인자 1 : name
- string 타입의 이름

인자 2 : period
- number 타입의 미접속 시간 (분 단위)

##### 출력

- string 타입을 리턴해야 합니다.
- 미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
- 미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
- 미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.

##### 입출력 예시

let output = makeLastSeenMsg('mike', 40);
console.log(output); // --> 'mike: 40분 전에 접속함'

output = makeLastSeenMsg('mike', 121);
console.log(output); // --> 'mike: 2시간 전에 접속함'

output = makeLastSeenMsg('mike', 2887);
console.log(output); // --> 'mike: 2일 전에 접속함'

##### 힌트

- 자바스크립트에서 문자열 간 비교 연산은 사전식(lexical) 비교입니다. ('123' > '2' => false)
- string 타입과 number 타입의 덧셈 연산에 주의합니다.