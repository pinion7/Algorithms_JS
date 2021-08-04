function isOdd(num) {
  let i = 1;
  num = Math.abs(num);
  while(i <= num) {
    if (i === num) {
      return true;
    }
    i = i + 2;
  }
  return false;
}



