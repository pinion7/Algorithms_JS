function powerOfTwo(num) {
  // while문을 사용해야 한다.
  // Math.pow를 활용하면 될 것이다.
  // 특정 변수를 정해 거듭제곱할 필요가 있으며, 반복문은 num보다 변수의 값이 같거나 커질 때 탈출한다.
  // 같으면 true, 크면 false를 
  let powerValue = 0;
  let i = 0;
  while (powerValue < num) {
    powerValue = Math.pow(2, i)
    ++i;
  }
  if (powerValue === num) {
    return true;
  }
  return false;
}






