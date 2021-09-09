const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.
  // 우선 범위별 최소값을 알 수 있어야 한다.
  // 범위 내에 가장 낮은 높이 * 길이가 바로 직사각형의 너비이기 때문이다.
  // 배열을 하나씩 좁혀가면서 구간별 직사각형의 너비를 구하고
  // 배열의 길이가 1이될때까지 이 작업을 통해 체킹을 하면서, 가장 큰 값을 반환하면 된다.

  // 풀이 - 도저히 답이 안나와서 레퍼참조하여 다시 풀이
  // 우선 구간 트리를 활용하여 최소구간트리를 구현할 필요가 있다. (단, 최소값과 최소인덱스를 함께 구한다.)
  const createMinTree = (start, end, arr) => {
    if (start === end) return { val: arr[start], idx: start }

    let mid = parseInt((start + end) / 2);
    let left = createMinTree(start, mid, arr);
    let right = createMinTree(mid + 1, end, arr);

    return { 
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    }
  }

  // 최소구간트리 생성
  const minTree = createMinTree(0, histogram.length - 1, histogram);

  // 배열의 범위가 주어졌을 때 최소값의 인덱스를 찾는 함수도 만든다.
  const findMinIdx = (start, end, rangeStart, rangeEnd, minTree) => {
    // 탈출조건
    if (rangeStart <= start && rangeEnd >= end) return minTree.idx;

    // 범위 밖의 경우
    if (rangeStart > end || rangeEnd < start) return rangeStart;

    // 범위가 겹치는 경우
    let mid = parseInt((start + end) / 2);
    let left = findMinIdx(start, mid, rangeStart, rangeEnd, minTree.left);
    let right = findMinIdx(mid + 1, end, rangeStart, rangeEnd, minTree.right);
    return histogram[left] < histogram[right] ? left : right
  }

  // 이제 구간별 최소인덱스를 찾고, 그걸 활용하여 직사각형 넓이의 최대값을 구하기 위한 함수를 만든다.
  const rectangleVal = (start, end) => {
    // 탈출조건
    if (start > end) return 0;

    // 우선 해당 구간에 대한 최소값의 인덱스를 찾기
    const minIdx = findMinIdx(0, histogram.length - 1, start, end, minTree);

    return Math.max(
      // 현재 구간에서 가능한 최대 넓이 구하기
      (end - start + 1) * histogram[minIdx],
      // 최소값인덱스를 기준으로 구간을 잘라 재귀적으로 구간별 최대값 체크하여 그 중에 가장 값이 큰 넓이 구해오기 (좌측, 우측으로 각각 재귀)
      rectangleVal(start, minIdx - 1),
      rectangleVal(minIdx + 1, end),
    )
  }

  // 넓이 구하는 함수를 실행하여 실제 결과 반환
  return rectangleVal(0, histogram.length - 1);
};
