const rotatedArraySearch = function (rotated, target) {
  // 이진 탐색트리 비슷한 맥락에서 바라봐야한다.
  let firstIdx = 0;
  let lastIdx = rotated.length - 1;
  let centerIdx = Math.floor((firstIdx + lastIdx) / 2);

  // 반복문을 만들어보자
  while(firstIdx <= lastIdx) {
  // 탈출문을 만들어두고
    if (rotated[centerIdx] === target) return centerIdx;

    // 조건을 여러번 중첩해보자
    else if (rotated[centerIdx] < rotated[lastIdx]) {
      // 중앙값을 시작으로 우측으로 오름차순 된 상태
      // 목표값이 중앙값보다 크지만 마지막값보다 작으면 첫번째 인덱스를 땡겨줘야되고
      if (target > rotated[centerIdx] && target <= rotated[lastIdx]) {
        firstIdx = centerIdx + 1;
      }
      // 목표값이 중앙값보다 크지만 마지막값 범위 밖에있다면(=> 첫번째 인덱스와 중앙 인데스 사이에 있다면)
      // 마지막인덱스를 중앙으로 땡겨줘야 한다.
      else {
        lastIdx = centerIdx - 1;
      }
      centerIdx = Math.floor((firstIdx + lastIdx) / 2);
    }

    // 반대의 과정으로 진행하면 된다.
    else  {
      // 중앙값을 마지막으로 좌측부터 오름차순 된 상태
      if (target < rotated[centerIdx] && target >= target[firstIdx]) {
        lastIdx = centerIdx - 1;
      }
      else {
        firstIdx = centerIdx + 1;
      }
      centerIdx = Math.floor((firstIdx + lastIdx) / 2);
    }
  }
  return -1;
};