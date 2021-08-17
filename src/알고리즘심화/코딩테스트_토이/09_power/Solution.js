function power(base, exponent) {
  // Math.pow와 거듭제곱 연산자는 사용하지 못하기 때문에, 
  // 순수하게 n*n 으로 문제를 해결해야 한다.
  // 재귀를 통해, 지수부를 지속적으로 절반씩 잘라내가면서 
  // 결국 거듭제곱의 연산 횟수를 최소화해야 한다.

  // 풀이
  // 1. base의 0승은 1이다. 가장 작은 단위일때 1차적으로 재귀를 탈출한다.
  if (exponent === 0) return 1;

  // 2. 지수부의 길이를 잘라 준다. 다만 소수점은 생략한다. 
  // (exponent가 홀수일 경우엔 나중에 연산을 추가로 한번 더 해주면 된다.)
  // 94,906,249으로 항상 나눠줘야 숫자가 연산가능범위를 초과하지 않기 때문에 이것도 미리 선언해두고 쓴다.
  let halfExponent = parseInt(exponent / 2);
  let restCal = 94906249;

  // 3. 줄어든 지수를 바탕으로 재귀한 결과를 새로운 변수에 대입해준다
  // 재귀를 벗삼아 newBase는 이제 아주 효율적인 거듭제곱 연산의 키로 작용하게 된다.
  let newBase = power(base, halfExponent);

  // 4. newBase로 연산한 결과값을 만들어주고
  let result = newBase * newBase % restCal;
  
  // 5. 두번째 탈출문을 써준다. 홀수이면, base를 한번 더 연산해준 결과를 리턴해야 한다.
  if (exponent % 2 === 1) return result * base % restCal;
  else return result;
}