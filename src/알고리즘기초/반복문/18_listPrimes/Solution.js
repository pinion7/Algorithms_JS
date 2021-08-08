function listPrimes(num) {
  let result = '2';
  for (let i = 3; i <= num; i = i + 2) {
    let isPrime = true;
    let sqrtNum = parseInt(Math.sqrt(i));
    for (let j = 3; j <= sqrtNum; j = j + 2) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime) result = result + `-${i}`;
  }  
  return result;
}




