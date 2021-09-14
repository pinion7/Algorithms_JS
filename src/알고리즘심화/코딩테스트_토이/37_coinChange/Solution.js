const coinChange = function (total, coins) {
  // 동적계획법이나 조합을 활용해 풀어야 하는 문제이다.
  
  // 풀이
  // 0부터 목표 금액까지의 모든 경우의 수를 카운트하기 위해 배열의 형태를 만든다.
  // 아직 카운트되지 않았기 때문에 0을 입력해둔다. 단, 0번 인덱스에는 1를 넣는다.
  // 아무것도 선택하지 않은 것도 경우의 수에 해당되기 때문이다.
  let allCases = [1];
  for (let i = 1; i <= total; ++i) {
    allCases[i] = 0;
  }

  // 그 다음 돈의 종류가 배열의 형태로 담겨 있는 coins를 하나씩 탐색한다.
  // 동시에 내부에 목표 금액까지 순차적으로 증가하는 이중 for문을 만든다.
  // 만약 j가 동전의 i번째 요소값보다 크거나 같으면
  // j인덱스에서 동전의 i번째 요소값을 뺀 값을 allCases의 인덱스로하여 allCase의 j번 인덱스의 요소값에 가산해준다.
  // j보다 더 수가 큰 동전은 경우의 수로 가산해줄수가 없기 때문이다.
  for (let i = 0; i < coins.length; ++i) {
    for (let j = 1; j <= total; ++j) {
      if (coins[i] <= j) {
        allCases[j] += allCases[j - coins[i]];
      }
    }    
  }
  // 동전으로 만들 수 있는 모든 경우의 수가 total에 담기게 된다.
  return allCases[total];
};