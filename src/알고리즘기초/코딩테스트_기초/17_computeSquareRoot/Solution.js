function computeSquareRoot(num) {
  // 우선 정수부분의 최대 근사치를 찾는다.
  // 정수부분이 정해지면 소수부분을 반복문을통해 증가시키면서 제곱근값에 근접해본다
  // 결과가나오면 소수점 둘째자리까지만 남길수있도록 반올림 함수를 적용한다.
  // 리턴한다.
  let integar = 1;
  while(integar * integar < num) {
    integar++;
  }
  if (integar * integar === num) {
    return integar;
  }
  integar = integar - 1;

  let approximation = 0;
  for (let i = 0; i <= 0.9; i = i + 0.01) {
    for (let j = 0; j <= 0.009; j = j + 0.0001) {
      if (Math.round(Math.pow((integar + i + j), 2) * 100) * (1 / 100) <= num) {
        approximation = integar + i + j
      }
      else if (Math.round(Math.pow((integar + i + j), 2) * 100) * (1 / 100) > num) {
        return Math.round(approximation * 100) * 1 / 100 ;
      }
    }
  }
}






