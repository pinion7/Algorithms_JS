const binarySearch = function (arr, target) {
  // 분석 및 원리 설명
  // 이진탐색은 원하는 값을 찾음에 있어 일반적인 반복문보다 훨씬 빠른 속도를 보여줄 수 있다.
  // 이진 탐색을 위해서는 배열의 정중앙 인덱스를 항상 업데이트 할 수 있어야 한다.
  // 이는 0번째 인덱스와 마지막 인덱스를 더한 값을 2로 나눈 번호라고 할 수 있다.
  // 정중앙을 파악해야하는 이유는 정중앙 인덱스의 값과 target을 비교하여 target이 이보다 작으면 오른쪽을 다버리고
  // 이보다 크면 왼쪽을 다버리는 식으로 해서 범위를 좁혀나가야 하기 때문이다.
  // 이런 기본적인 원리만 보아도 얼마나 빠르게 목표 값에 다가갈 수 있을지를 인식할 수 있다.
  // 당연한 부분이지만, 진행을 할때에 오른쪽이 다 제외되면 중앙인덱스가 마지막 인덱스가 되어야 하고
  // 반대로 왼쪽이 다제외되면 중앙인덱스가 0번째 인덱스가 되어야 한다.
  // 값이 나누어 떨어지지 않을 때는 내림을 적용한 값을 중앙 인덱스로 간주하면 된다. (ex) 4.5면 -> 4가 중간값)
  // 그리고 결국 중앙인덱스가 target과 같아질 때 값을 찾은 것이라고 할 수 있다.

  // 풀이
  // 1. 우선 0, 중앙, 마지막 인덱스를 각각 변수로 선언하여 활용해보자
  let firstIdx = 0
  let lastIdx = arr.length - 1
  let centerIdx = Math.floor((firstIdx + lastIdx) / 2)

  // 2. 반복문으로 탐색을 진행한다.
  // 시작인덱스가 마지막 인덱스를 초과하는 순간 반복문은 끝난다.(모든 걸 탐색한 것)
  while (firstIdx <= lastIdx) {
    // 3. 목표를 찾으면 바로 인덱스 값을 반환해준다.
    if (target === arr[centerIdx]) {
      return centerIdx;
    }
    // 4. 그게 아니면 이진탐색을 진행한다. 작을때는 다음과 같이 인덱스를 바꿔주고
    // 대체할 때 어차피 중앙값보다 target이 작다고 했으니 중앙값도 포함하여 제외해준다.
    else if (target < arr[centerIdx]) {
      lastIdx = centerIdx - 1
      centerIdx = Math.floor((firstIdx + lastIdx) / 2)
    }
    // 5. 클 때는 아래와 같이 인덱스를 조정한다.
    // 마찬가지로 중앙값도 포함하여 제외한다.
    else if (target > arr[centerIdx]) {
      firstIdx = centerIdx + 1
      centerIdx = Math.floor((firstIdx + lastIdx) / 2)
    }
  }

  // 6. 목표를 찾지 못하고 나왔다면 -1을 반환한다.
  return -1;
};