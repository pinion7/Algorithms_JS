function fibonacci(num) {
  let arr = [];
  for (let i = 0; i < num + 1; ++i) {
    if (arr.length <= 1) arr[i] = i;
    else arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}





