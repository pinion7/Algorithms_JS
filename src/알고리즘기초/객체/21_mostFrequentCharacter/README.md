### 21_mostFrequentCharacter

***

###### 문제 

문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

##### 입력

인자 1 : str
- string 타입의 공백이 있는 문장

##### 출력

- string 타입을 리턴해야 합니다.

##### 주의 사항

- 띄어쓰기는 제외합니다.
- 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
- 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

##### 입출력 예시

let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'

output = mostFrequentCharacter('hello world');
console.log(output); // --> 'l'

output = mostFrequentCharacter('   ');
console.log(output); // --> ''

output = mostFrequentCharacter('');
console.log(output); // --> ''

output = mostFrequentCharacter('abba');
console.log(output); // --> 'b'