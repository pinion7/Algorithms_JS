function makeMultiplesOfDigit2(num1, num2) {
  if (num1 > num2) {
    let blank = num1;
    num1 = num2;
    num2 = blank;
  }

  let count = 0;
  for (i = num1; i <= num2; i++) {
    if (i % 2 === 0 && i !== 0) count++
  }
  return count;
}




