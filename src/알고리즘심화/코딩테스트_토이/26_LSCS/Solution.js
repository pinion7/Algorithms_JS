const LSCS = function (arr) {
  // 풀이 1
  let max = arr[0];
  let subArrSum = arr[0];

  for (let i = 1; i < arr.length; ++i) {
    subArrSum = Math.max(subArrSum + arr[i], arr[i]);
    max = Math.max(max, subArrSum);
  }
  return max;
  
  // 풀이 2
  // let max = -1000000000
  // let subArrSum = 0;
  // for (let i = 0; i < arr.length; ++i) {
  //   subArrSum += arr[i];
  //   if (subArrSum > max) max = subArrSum;

  //   if (subArrSum < 0) subArrSum = 0;
  // }
  // return max;
}