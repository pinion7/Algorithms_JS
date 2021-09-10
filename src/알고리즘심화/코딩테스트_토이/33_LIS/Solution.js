const LIS = function (arr) {
  //멱집합을 구현하면서 정렬이 오름차순으로 되어있지 않은 케이스들은 제외하고,
  //그렇게 구해진 집함들 중에서 가장 길이가 긴 케이스를 리턴해보자.

  // 풀이
  const result = [];

  const getSubset = (idx, bucket) => {
    result.push(bucket);

    for (let i = idx; i < arr.length; ++i) {
      // 이 부분이 가장 중요한 포인트이다. bucket이 빈배열인 경우엔 무조건 하나를 붙여야 하지만
      // bucket의 길이가 1이상일 때는 오름차순을 만족하는지를 체크하고 그런 경우에만 합쳐서 재귀시킨다.
      if (bucket.length < 1 || bucket[bucket.length - 1] < arr[i]) {
        getSubset(i + 1, bucket.concat(arr[i]));
      }
    }
  }

  getSubset(0, []);

  // 리듀스로 최대 길이를 구한다.
  return result.reduce((acc, curr) => {
    if (acc < curr.length) acc = curr.length;
    return acc;
  }, 0)
};