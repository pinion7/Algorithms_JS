function isOdd(num) {
  if (num === 1) return true;
  else if (num === 0) return false;
  return isOdd(Math.abs(num) - 2);
}




