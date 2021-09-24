function boringBlackjack(cards) {
  // 풀이
  const isPrime = (num) => {
    if (num === 2) return true;
    if (num === 1 || num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); ++i) {
      if (num % i === 0) return false;
    }

    return true;
  }

  const result = [];
  const getCombination = (arr, bucket) => {
    if (bucket.length === 3) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < arr.length; ++i) {
      getCombination(arr.slice(i + 1), bucket.concat(arr[i]));
    }
  }

  getCombination(cards, []);

  return result.reduce((acc, [num1, num2, num3]) => {
    if (isPrime(num1 + num2 + num3)) ++acc;
    return acc;
  }, 0)
}