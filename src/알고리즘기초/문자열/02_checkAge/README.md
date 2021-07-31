### 02_checkAge

***

###### 문제 

이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다.

##### 입력

인자 1 : name
- string 타입의 알파벳 문자열
- name.length는 10 이하

인자 2 : age
- number 타입의 나이 (0보다 크고 100보다 작은 자연수)

##### 출력

- string 타입을 리턴해야 합니다.
- 이름이 Adrian이고, 나이가 21살 이상이면, Welcome, Adrian! 을 리턴해야 합니다
- 이름이 John이고, 만일 21살보다 적으면, Go home, John!을 리턴해야 합니다.

##### 입출력 예시

let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'

let output2 = checkAge('John', 17);
console.log(output2); // --> 'Go home, John!'

##### 힌트

- 쉼표와 공백, 느낌표까지 정확히 리턴해야 합니다.
- 두 값을 비교할 때는 비교 연산자(<, >, === 등)를 사용합니다.
