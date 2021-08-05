function makeOddDigits(num) {
  let result = '';
  let i = 1;
  let j = 1;
  while(i <= num) {
    result += j;
    ++i
    j += 2;
  }
  return result;
}



