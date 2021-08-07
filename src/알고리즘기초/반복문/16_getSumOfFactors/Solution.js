function getSumOfFactors(num) {
  let result = 0;
  for(let i = 0; i <= num; ++i) {
    if (num % i === 0) result += i;
  }
  return result;
}




