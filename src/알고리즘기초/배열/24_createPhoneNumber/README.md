### 24_createPhoneNumber

***

###### 문제 

0-9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열을 리턴해야 합니다.

##### 입력

인자 1 : arr
- number 타입을 요소로 갖는 배열
- arr[i]는 0 이상 9 이하의 정수
- 배열의 길이는 8 또는 11

##### 출력

- string 타입을 리턴해야 합니다.

##### 주의 사항

- 반복문(for, while) 사용은 금지됩니다.
- 배열의 길이가 8인 경우, 앞에 [0, 1, 0]이 있다고 가정합니다.

##### 입출력 예시

let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
console.log(output); // --> '(010)1234-5678'

output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
console.log(output); // --> '(010)8765-4321'

output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
console.log(output); // --> '(011)4321-8765'

#### 힌트
Array.prototype.join에 대해서 검색해 봅니다.