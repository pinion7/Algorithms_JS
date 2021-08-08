### 18_listPrimes

***

###### 문제 

1 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

##### 입력

인자 1 : num
- number 타입의 정수 (num >= 2)

##### 출력

- string 타입을 리턴해야 합니다.
- 2-3-5-7의 형식으로 리턴해야 합니다.

##### 주의 사항

- 이중 반복문(double for loop)을 사용해야 합니다.

##### 입출력 예시

let output = listPrimes(2);
console.log(output); // --> '2'

output = listPrimes(6);
console.log(output); // --> '2-3-5'

output = listPrimes(18);
console.log(output); // --> '2-3-5-7-11-13-17'

##### 힌트

- 반복문의 break 문에 대해서 학습합니다. (javascript loop break)