function makeDigits2(num) {
  let result = '1';
  let i = 2;
  while(i <= num) {
    result = result + `-${i}`
    ++i;
  }
  return result;
}


