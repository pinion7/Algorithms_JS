let tiling = function (n) {
  // 풀이 3
  // 테이블레이션도 가능하다.
  const arr = [0, 1, 2];

  for (let i = 3; i <= n; ++i) {
    arr[n] = arr[n - 1] + arr[n - 2];
  }

  return arr[n];
}