const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // 풀이 3 레퍼런스 방법 활용
  let leftIdx = 0;
  let rightIdx = 0;

  while (k > 0) {
    // k를 2등분 하여 각 배열에서 중간 인덱스로 활용한다.
    let count = Math.ceil(k / 2);
    let leftStep = count;
    let rightStep = count;

    // 탈출 조건
    // 아직 k가 0이 아닌데도 한 쪽 배열에 마지막을 넘어서면 남은k를 나머지 배열쪽에 가산하고 탈출한다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // k를 반으로 나눈 카운트가 아직 배열에서 체크할 수 있는 남은 요소들보다 클 경우, Step변수에 남은 요소들의 개수를 대입해준다.
    if (count > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (count > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    // 두 배열의 현재 인덱스 값을 비교해서, 값이 작은 배열의 앞에 있는 요소들을 모두 k값이 아니다.
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      // 그러므로 인덱스를 +해줘야 한다.
      leftIdx = leftIdx + leftStep;
      // 처리가 끝나면 k값을 각 배열의 중간 값만큼 차감해준다.
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }
  if (arr1[leftIdx - 1]) leftResult = arr1[leftIdx - 1]
  else leftResult = -1;
  if (arr2[rightIdx - 1]) rightResult = arr2[rightIdx - 1]
  else rightIdx = -1;

  return Math.max(leftResult, rightResult);
};