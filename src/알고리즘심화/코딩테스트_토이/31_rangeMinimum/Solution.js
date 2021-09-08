const rangeMinimum = function (arr, ranges) {
  // 구간 트리는 범위를 절반으로 쪼개가며 최소값을 쌓아가는 구조이다.
  // 레퍼 참조하여 우선 객체 형태로 구간최소트리를 만들어본다.
  const segementMinTree = (arr, start, end) => {
    // 탈출 조건
    if (start === end) return { value: arr[start] }

    // 재귀 구간
    let mid = parseInt((start + end) / 2);
    let left = segementMinTree(arr, start, mid);
    let right = segementMinTree(arr, mid + 1, end);

    return {
      value: Math.min(left.value, right.value),
      left,
      right, 
    }
  }

  // 최소 구간 트리 생성
  const minTree = segementMinTree(arr, 0, arr.length - 1);

  // 이제 주어진 범위 값에 해당하는 최소값을 찾기 위한 함수를 구현해보자.
  const findMinTree = (start, end, rangeStart, rangeEnd, tree) => {
    // 구간 좌표가 현재 트리 좌표와 같거나 포괄하고 있다면
    // 그냥 바로 해당 tree의 최소값을 리턴하면 된다.
    if (rangeStart <= start && end <= rangeEnd) return tree.value;

    // 범위 내에 있지 않다면
    // 그말인즉슨, 레인지 범위의 시작점이 end보다 크거나
    // 레인저 범위의 끝나는점이 start보다 작다면, 아예 범위 밖의 수를 리턴
    if (rangeStart > end || rangeEnd < start) return 1000000;

    // 그게 아니라 범위가 겹친다면
    let mid = parseInt((start + end) / 2)
    return Math.min(
      findMinTree(start, mid, rangeStart, rangeEnd, tree.left),
      findMinTree(mid + 1, end, rangeStart, rangeEnd, tree.right)
    )
  }

  // 결과 리턴해보자
  const result = ranges.map(el => {
    let [rangeS, rangeE] = el;
    return findMinTree(0, arr.length - 1, rangeS, rangeE, minTree)
  })

  return result;
};
