function findBugInApples(arr) {
  // 이중 반복문이 필요할 것으로 보인다
  // 그 안에 조건문으로 B를 찾아낼 수 있도록 한다
  // B를 찾아내는 순간 리턴 값을 반환한다.
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i].length; ++j) {
      if (arr[i][j] === 'B') {
        return [i, j];
      }
    }
  }
}





