const balancedBrackets = function (str) {
  // 풀이 2
  // 우선 배열화하고, 각 종류의 괄호가 연속으로 나오는 순간
  // 해당 인덱스 스플라이스 하고 다시 처음부터 탐색하는 방법이다.
  // i를 0이 아닌 -1로 초기화 해줘야 돌아가자마자 +1이 된다.
  const arr = str.split('');
  for (let i = 0; i < arr.length; ++i) {
		let bracket = arr[i] + arr[i + 1];
    if (bracket === '[]' || bracket === '{}' || bracket === '()') {
      arr.splice(i, 2)
      i = -1;
    }
  }
  if (arr.length !== 0) return false;
  return true;
}