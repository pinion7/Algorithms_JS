function divideChocolateStick(M, N) {
  // 최대공약수를 구하고, 1부터 최대공약수까지를 분자로 하고
  // M, N을 분모로하여 나누기를 진행한다.
  // 배열의 0번은 약수, 1번은 M / 약수의 몫, 2번은 N / 약수의 몫이된다.

  // 풀이
  // 우선 최대공약수 추출 함수부터 구현한다.
  const makeDivisor = (a, b) => {
    if (b === 0) return a;
    if (a > b) return makeDivisor(b, a % b);
    else return makeDivisor(a, b % a);
  }

  // 최대공약수의 약수들이 바로 두 수의 공약수들이기 때문에 그것을 담는 배열을 만들어보자.
  let maxDivisor = makeDivisor(M, N);
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(maxDivisor); ++i) {
    if (maxDivisor / i === i) divisors.push(i);
    else if (maxDivisor % i === 0) divisors.push(i, maxDivisor / i);
  }

  // 이제 정렬하고 맵으로 변환하여 반환한다.
  return divisors.sort((a, b) => a - b).map(el => {
    return [el, M / el, N / el]
  });

}