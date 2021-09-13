// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
}

const closestPairOfPoints = function (points) {
  // 거리 계산 함수를 기준으로 정렬을 해보자.
  // 풀이
  let currVal = calculateDistance(points[0], points[1]);  
  points.sort((a, b) => {
    let nextVal = calculateDistance(a, b);
    if (currVal < nextVal) return -1;
    else if (currVal > nextVal) {
      currVal = nextVal;
      return 1;
    }
    else return 0;
  })

  return Math.round(currVal * 100);
};