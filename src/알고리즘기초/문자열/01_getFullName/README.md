### 01_getFullName

***

###### 문제 

이름과 성을 입력받아 띄어쓰기 하나를 사이에 둔 단일 문자열을 리턴해야 합니다.

##### 입력

인자 1 : firstName
- string 타입의 알파벳 문자열
- firstName.length는 10 이하

인자 2 : lastName
- string 타입의 알파벳 문자열
- lastName.length는 10 이하

##### 출력

- string 타입을 리턴해야 합니다.

##### 입출력 예시

let output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

##### 힌트

- 문자열을 합칠 때에는 + 연산자를 사용합니다.

'Code' + 'States'; // 'CodeStates'
'Hello ' + 'World'; // 'Hello World'
