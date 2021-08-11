### 13_mergeArrays

***

###### 문제 

두 개의 배열을 입력받아 순서대로 합쳐진 배열을 리턴해야 합니다.

##### 입력

인자 1 : arr1
- 임의의 요소를 갖는 배열

인자 2 : arr2
- 임의의 요소를 갖는 배열

##### 출력

- 두 배열이 합쳐진 새로운 배열을 리턴해야 합니다.
- [arr1[0], ..., arr1[n - 1], arr2[0], ..., arr2[m - 1]]
- arr1.length는 n
- arr2.length는 m

##### 주의 사항

- 반복문(for, while) 사용은 금지됩니다.

##### 입출력 예시

let output = mergeArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

##### 힌트
함수의 제목(mergeArrays)을 활용해 검색해 봅니다(js how to merge arrays)