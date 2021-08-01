### 07_isOddLength

***

###### 문제 

문자열을 입력받아 그 길이가 홀수인지 여부를 리턴해야 합니다.

##### 입력

인자 1 : word
- string 타입의 문자열
- word.length는 10 이하

##### 출력

- boolean 타입을 리턴해야 합니다.

##### 주의 사항

- 0은 짝수로 간주합니다.

##### 입출력 예시

let output = isOddLength('special');
console.log(output); // --> true

output = isOddLength('specials');
console.log(output); // --> false