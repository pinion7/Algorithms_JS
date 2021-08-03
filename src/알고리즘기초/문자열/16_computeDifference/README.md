### 16_computeDifference

***

###### 문제 

두 수를 입력받아 두 수의 차이를 나타내는 메세지를 리턴해야 합니다.

##### 입력

인자 1 : num1
- number 타입의 정수 (num1 >= 0)

인자 2 : num2
- number 타입의 정수 (num2 >= 0)

##### 출력

- string 타입을 리턴해야 합니다.

##### 주의 사항

- 문자열 간 덧셈 연산은 금지됩니다.
- Template string(template literal)을 사용해 풀어야 합니다.
- 점수 간 차이는 절대값(absolute)을 사용합니다.

##### 입출력 예시
let output = computeDifference(3, 7);
console.log(output); // --> '3, 7의 차이는 4입니다.'

output = computeDifference(7, 3);
console.log(output); // --> '7, 3의 차이는 4입니다.'

##### 힌트
- Math 객체 내에 절대값(absolute)을 구하는 method가 이미 정의되어 있습니다.