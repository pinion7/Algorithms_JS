### LRU

##### 문제 설명

- 문제 설명 pdf 참조

##### 입력설명

- 첫 번째 줄에 캐시의 크기인 S(3<=S<=10)와 작업의 개수 N(5<=N<=1,000)이 입력된다.
- 두 번째 줄에 N개의 작업번호가 처리순으로 주어진다. 작업번호는 1 ~100 이다.

##### 출력설명

- 마지막 작업 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례로 출력합니다.

##### 입출력 예

let output = solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]);
console.log(output); // [7, 5, 3, 2, 6]
