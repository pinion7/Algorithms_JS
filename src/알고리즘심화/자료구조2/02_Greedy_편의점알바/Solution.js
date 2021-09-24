function partTimeJob(k) {
  const coins = [500, 100, 50, 10, 5, 1];

  let result = 0;
  for (let i = 0; i < coins.length; ++i) {
    if (k % coins[i] === 0) {
      return result += k / coins[i];
    }
    else {
      let newK = parseInt(k / coins[i]);
      k -= coins[i] * newK;
      result += newK;
    }
  }
}