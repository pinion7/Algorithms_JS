### 14_compareNumberStrings

***

###### 문제 

두 개의 숫자 문자열을 입력받아 더 큰 수를 나타내는 문자열을 구하고, 해당 문자열이 나타내는 수에 5를 더한 수를 나타내는 숫자 문자열을 리턴해야 합니다.

##### 입력

인자 1 : numStr1
- string 타입의 숫자(정수) 문자열

인자 2 : numStr2
- string 타입의 숫자(정수) 문자열


##### 출력

- string 타입을 리턴해야 합니다.

##### 입출력 예시

let output = compareNumberStrings('123', '2');
console.log(output); // --> '128'

##### 힌트

- 자바스크립트에서 문자열 간 비교 연산은 사전식(lexical) 비교입니다. ('123' > '2' => false)
- string 타입과 number 타입의 덧셈 연산에 주의합니다.