function computePower(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; ++i) {
    result *= base;
  }
  return result;
}




