function modulo(num1, num2) {
  // num2에 0을 곱하고 num1이랑 비교를 해서 작으면 반복문을 계속 실행한다.
  // num2에 1을 곱하고 num1이랑 비교를 해서 작으면 반복문을 계속 실행한다.
  // num2에 2을 곱하고 num1이랑 비교를 해서 작으면 반복문을 계속 실행한다.
  // 이런식으로 가다가 num2에 n을 곱했는데, num1보다 커지는 순간 num1 - num2*(n-1)의 값을 리턴한다.
  // 그게 바로 나머지 값이다.
  // num2가 0일 경우는, 그냥 에러메시지가 뜨도록 처음에 조건문을 걸고 시작한다.
  if (num2 === 0) {
    return 'Error: cannot divide by zero';
  }

  let i = 0;
  while(num2 * i <= num1) {
    ++i;
  }
  return num1 - num2 * (i - 1);
}




