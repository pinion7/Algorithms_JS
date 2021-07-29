### 10_followingDay

***

###### 문제 

요일을 입력받아 해당 요일의 다음 요일을 리턴해야 합니다.

##### 입력

인자 1 : day
- 임의의 입력
- 가능한 요일: 월요일, 화요일, 수요일, 목요일, 금요일, 토요일, 일요일

##### 출력

- string 타입을 리턴해야 합니다.
- 올바른 요일을 입력받은 경우, 다음 요일을 리턴해야 합니다.

##### 주의 사항

- 올바른 요일이 아닌 경우에는 올바른 요일이 아닙니다 라는 문구를 리턴해야 합니다.

##### 입출력 예시

let output = followingDay('월요일');
console.log(output); // --> '화요일'

output = followingDay('일요일');
console.log(output); // --> '월요일'

output = followingDay('월');
console.log(output); // --> '올바른 요일이 아닙니다'

output = followingDay(100);
console.log(output); // --> '올바른 요일이 아닙니다'