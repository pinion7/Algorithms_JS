function orderOfPresentation (N, K) {
  // 분석
  // 순서는 0번째부터 시작하기 때문에 K보다 앞에 있는 것의 개수라 할 수 있다.
  
  // 풀이
  // 1. 앞선 경우의 수를 담을 결과 배열을 선언한다.
  // 2. 이중 반복문으로 현재 i번째 인덱스가 그 다음 인덱스의 값보다 큰지를 체크한다.
  // 만약 크다면 count를 올려주는데 이유는, 가령 1로 시작하는 모든 배열은 2로 시작하는 것보다 작다
  // 작은 수의 개수를 count로 세는 것이다.
  // 3. 다음 for문으로 그 count의 개수로 인해 나올 수 있는 모든 경우의 수를 계산한다.
  // 가령, 3개의 배열로 만들 수 있는 경우의 수는 3*2*1 = 6이다. 
  // 그러한 원리에 입각해서 반복문을 설정해주면 된다.
  // 그리고 그렇게 체크된 count를 result에 더해준다.
  // 4. 다시 다음 인덱스를 기준으로 그보다 작은 카운트가 있는지를 체크하는 것을 반복한다.
  // 결국 K배열 이전에 만들어질 수 있는 모든 경우의 수가 합산되어 result에 담기게 된다.
  let result = 0;

  for (let i = 0; i < N; ++i) {
    let count = 0;
    for (let j = i + 1; j < N; ++j) {
      if(K[i] > K[j]) ++count;
    }
    
    for (let k = 1; k < N - i; ++k) {
      count *= k;
    }
    result += count;
  }

  return result;
}




