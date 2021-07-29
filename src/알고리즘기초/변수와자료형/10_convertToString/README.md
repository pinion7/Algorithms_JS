### 10_convertToString

***

###### 문제 설명

이전 문제와는 반대로, 우리가 자바스크립트 코드를 작성을 다 하고 웹 브라우저에 보여줄 때는 보통 string의 형태로 전달됩니다. 마치 우리가 책을 읽을 때도 숫자라고 따로 표시하지 않는 것과 같습니다. string으로 변환하기 위해서는 String() 함수를 사용하면 됩니다.

String(100); // '100'
문제로 확인해봅시다 :)

##### 문제

임의의 값을 입력받아 문자열(string)의 형태로 리턴해야 합니다.

##### 입력

- 임의의 값

##### 출력

- string 타입을 리턴해야 합니다.

##### 주의 사항

- number, string, boolean 타입만 입력됩니다.

##### 입출력 예시

let output = convertToString(120);
console.log(output); // --> '120'

let output2 = convertToString('hello');
console.log(output2); // --> 'hello'

let output3 = convertToString(true);
console.log(output3); // --> 'true'