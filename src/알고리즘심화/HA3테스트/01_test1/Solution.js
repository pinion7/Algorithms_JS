function test1(A, B) {
  // 두 수의 최대공약수가 곧 가장 큰 정사각형 한변의 길이이다.
  
  // 풀이
  // 1. 최대공약수 함수부터 구현한다.
  const getMaxDivisor = (a, b) => {
    if (b === 0) return a;
    if (a < b) return getMaxDivisor(a, b % a);
    else return getMaxDivisor(b, a % b);
  }

  // 2. 리턴한다.
  return getMaxDivisor(A, B);
}





