function ocean(target, type) {
  // 풀이
  const arr = new Array(target + 1).fill(0);
  arr[0] = 1;


  for (let i = 0; i < type.length; ++i) {
    for (let j = 1; j <= target; ++j) {
      if (type[i] <= j) {
        arr[j] += arr[j - type[i]];
      }
    }
  }

  return arr[target];
}