function missHouseMeal(sideDishes) {
  // 멱집합에 대한 이해가 필요하다.
  // 멱집합이란 주어진 집합의 모든 부분집합들로 구성된 것을 의미한다.
  // 순열이랑은 다르게 순서는 중요하지 않다. 마치 조합과 비슷한데, 
  // 조합을 0개 뽑는 경우부터 최대 개수 뽑는 경우까지 전부 포함한다고 생각하면 될 것 같다.
  // 깊이 우선 탐색으로 재귀적으로 구현하는 게 효율적이다.

  // 풀이
  // 1. 정렬부터 시행해준다.
  sideDishes.sort();

  // 2. 멱집합을 담을 결과배열 선언 및 멱집합 구현 함수를 만든다.
  // sideDishes(원본배열)을 순회하면서 하나하나 뒤에 붙여 재귀를 보내는 방식이다.
  // 항상 arr의 요소들과 함께 붙여 다음 배열의 요소로 재귀시킨다.
  // 또한 매번 재귀 시 현재 인덱스에서 +1 해줌으로써, 그 값이 다음 재귀시에 시작 인덱스로 들어가게 함으로써,
  // sideDishes 요소 중 중복되지 않은 요소들만 다시 arr의 요소들과 합쳐져서 result에 담길 수 있다.
  const result = [];
  const getSubsets = (start, arr, bucket) => {
    // 들어가자마 받은 배열부터 result에 투입
    result.push(bucket);
    // if (sideDishes.length === idx) return;
    // for문 자체가 종료조건이다. for문에 들어가지 못하면 재귀가 끝난다. 
    for (let i = start; i < arr.length; ++i) {
      getSubsets(i + 1, arr, bucket.concat(arr[i]));
    }
  }

  // 3. 0번과 빈배열부터 시작되게 하면, 재귀적으로 result에 멱집합이 완성될 것이다.
  getSubsets (0, sideDishes, []);

  // 4. 결과를 반환한다. 
  return result;
}