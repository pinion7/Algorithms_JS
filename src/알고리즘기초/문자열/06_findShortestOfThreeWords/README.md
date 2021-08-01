### 06_findShortestOfThreeWords

***

###### 문제 

차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

##### 입력

인자 1 : word1
- string 타입의 문자열
- word1.length는 10 이하

인자 2 : word2
- string 타입의 문자열
- word2.length는 10 이하

인자 3 : word3
- string 타입의 문자열
- word3.length는 10 이하

##### 출력

- string 타입을 리턴해야 합니다.

##### 주의 사항

- 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.

##### 입출력 예시

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

output = findShortestOfThreeWords('c', 'b', 'a');
console.log(output); // --> 'c'