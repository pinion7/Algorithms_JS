function computeWhenDouble(interestRate) {
// 정밀한 계산이 필요하기 때문에 72의 법칙은 적용이 안되는 문제이다
// 결국 임의의 원금을 정하고, 반복문을 통해 2배가 되는 시점을 구할 필요가 있다.
// while문이 적합해보이며, 햇수를 따로 카운트하여 탈출 이후의 햇수를 리턴하면 될 것이다.
  let interestRate = interestRate / 100;
  let principal = 100;
  let totalAmount = 100;
  let countYear = 0;
  while (totalAmount < principal * 2) {
    totalAmount = totalAmount + (totalAmount * interestRate);
    countYear++
  }
  return countYear;
}





