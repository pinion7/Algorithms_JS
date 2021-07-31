### 17_isFalsy

***

###### 문제 

임의의 값을 입력받아 falsy 값인지 여부를 리턴해야 합니다.

##### 입력

인자 1 : anything
- 임의의 값

##### 출력

- boolean 타입을 리턴해야 합니다.

##### 입출력 예시

let output = isFalsy('hello');
console.log(output); // --> false

output = isFalsy(0);
console.log(output); // --> true

output = isFalsy(true);
console.log(output); // --> false

output = isFalsy(undefined);
console.log(output); // --> true

output = isFalsy(NaN);
console.log(output); // --> true

output = isFalsy('');
console.log(output); // --> true

##### 힌트

- javascript에서 거짓으로 취급하는 값에 대해 검색해 봅니다. (js falsy value 또는 자바스크립트 거짓 값)
