const mergeSort = function (arr) {
  // 풀이 2 - 재귀적 접근
  // 재귀를 통해 병합정렬 구현하기
  // 우선 탈출 조건. 길이가 1이라는 건 모든 게 정렬되었다는 뜻임
  if (arr.length === 1) return arr
  // 중앙값을 만들어줘서 자를 기준을 세우고
  const centerIdx = Math.floor(arr.length / 2);
  // 왼쪽배열과 오른쪽 배열로 나눈다.
  const leftArr = arr.slice(0, centerIdx);
  const rightArr = arr.slice(centerIdx);
  // 그리고 정렬한 것을 병합해주면, 처음엔 쪼개질만큼 쪼개져들어가게되고
  // 길이가 1이될때 리턴 받은 값끼리 병합함수에 들어가 새로운 배열을 반환하게되고
  // 반환받은 값끼리 또 mergeArr에 들어가 새롭게 병합되어서 나오다가 최종적으로 하나의 배열로 리턴 됨
  return mergeArr(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeArr (left, right) {
  // 방법 1 - 인덱스를 활용한 정렬 (속도 굳!)
  // 배열을 오름차순 정렬하여 병합하는 함수부를 만든다.
  // 병합 결과를 담을 변수를 선언하고
  let result = [];
  // 왼쪽 오른쪽 배열의 시작 인덱스 만들어주기
  let lIdx = 0;
  let rIdx = 0;
  // 두 배열의 총 길이 만들어주기
  let totalLen = left.length + right.length;
  // 탈출조건을 while문으로 짠다.
  // 모든 인덱스가 끄트머리에 도달하면 탈출이다
  while (lIdx + rIdx < totalLen) {
    // 비교 후, 더 작은 요소 투입, 인덱스 플러스
    if (left[lIdx] <= right[rIdx]) {
      result.push(left[lIdx]);
      ++lIdx;
    }
    // 마찬가지로 비교후, 더 작은 요소 투입, 인덱스 플러스
    else if (left[lIdx] > right[rIdx]) {
      result.push(right[rIdx]);
      ++rIdx;
    }
    // 인덱스가 끝까지 간 경우 더 이상 넣을 게 없으므로, 
    // 다른 배열의 나머지 요소 투입
    else if (lIdx === left.length) {
      result.push(...right.slice(rIdx));
      rIdx = right.length;
    }
    else if (rIdx === right.length) {
      result.push(...left.slice(lIdx));
      lIdx = left.length;
    }
  }

  return result;
}