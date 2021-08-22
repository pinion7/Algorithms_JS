const insertionSort = function (arr, callback = (val => val)) {
  // 풀이 2
  let baseVal;
  // 반복문 시작
  for (let i = 0; i < arr.length - 1; ++i) {
    baseVal = arr[i + 1];
    for (let j = i; j > -1; --j) {
      if (callback(arr[j]) > callback(baseVal)) {
        arr[j + 1] = arr[j];
        arr[j] = baseVal;
      }
      else break;
    }
  }
  return arr;
};