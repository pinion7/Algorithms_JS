const mergeSort = function (arr) {
  if (arr.length === 1) return arr
  const centerIdx = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, centerIdx);
  const rightArr = arr.slice(centerIdx);
  return mergeArr(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeArr (left, right) {
  // 방법 2 - shift를 활용한 정렬 (방법 1에 비해 속도 안좋음)
  // 병합 결과를 담을 변수를 선언하고
  let result = [];
  // 탈출조건을 while문으로 짠다.
  // 하나라도 길이가 0이되면 탈출
  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  // 남은 것도 투입한다.
  if (left.length) result = result.concat(left);
  if (right.length) result = result.concat(right);

  return result;
}