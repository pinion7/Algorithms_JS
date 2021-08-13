let tiling = function (n) {
  // 풀이 2
  // 2*n 타일링은 피보나치 법칙과 동일하다.
  // 즉 메모이제이션을 활용해도 된다.
  const arr = [0, 1, 2];

  const fibonacci = (num) => {
    if (arr[num] !== undefined) return arr[num];
    arr[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return arr[num];
  }

  return fibonacci(n);
}