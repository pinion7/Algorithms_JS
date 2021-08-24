const quickSort = function (arr, callback = (el) => el ) {
  // TODO: 여기에 코드를 작성합니다.
  // 퀵정렬은 분할정복의 원리를 바탕으로 한, 가장 빠른 정렬 속도를 지닌 방식이다.
  // 비록 몇몇 상황에서는 비효율적인 경우도 있지만, 대체적으로는 굉장히 빠르다.
  // 그럴 수밖에 없는 것이, 기준점을 정해서 작은 값은 좌로, 큰 값은 우로 던지고
  // 다시 그걸 분할해서 좌 우로 나누어가면 최소한의 비교로 정렬이 완룔될 수밖에 없기 때문이다.
  // 퀵정렬에는 여러 방식이 있지만, 우선 가장 직관적으로 보일 수 있는 방식으로 진행해보겠다.

  // 풀이 1 - Not in place 방식
  // 메모리를 추가적으로 낭비하는 방식
  // 그래도 장점은 훨씬 쉽고 이해하기 좋으며, 배열의 요소가 중복되는 값이 있더라도 안정적으로 정렬한다.
  // 우선 재귀를 활용할 예정이기 때문에 우선 탈출조건을 만든다.
  // arr이 최소 단위로 쪼개져 요소가 비게 되면 리턴한다. 이것은 즉 퀵정렬을 위한 비교가 전부 이뤄졌다는 것
  if (arr.length === 0) return arr

  // 그리고 기준점을 정해야 하는데, 어디로 해도 상관이 없지만
  // 일단 0번 인덱스를 기준으로 정해본다.
  // 그리고 3개의 배열을 만들건데, 기준점을 가진 배열, 그보다 작은 배열, 그보다 큰 배열이 될 것이다.
  const base = [arr[0]];
  const left = [];
  const right = [];

  // 이제 비교를 시작한다.
  // base보다 작은 값은 좌측으로 갈것이며, 크면 우측 배열갈 것이다.
  for (let i = 1; i < arr.length; ++i) {
    if (callback(base[0]) > callback(arr[i])) left.push(arr[i]);
    else if (callback(base[0]) < callback(arr[i])) right.push(arr[i]);
    else base.push(arr[i]);
  }

  // 재귀를 적용하여 좌측과 우측 정렬도 각각 정렬을 진행해준다.
  // 가장 왼쪽에는 left가 와야하고, 중앙엔 base, 우측은 right가 와야하므로 아래처럼 재귀를 적용해준다.
  return quickSort(left).concat(base).concat(quickSort(right));
};