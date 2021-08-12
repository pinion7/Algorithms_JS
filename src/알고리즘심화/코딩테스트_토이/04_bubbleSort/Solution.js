const bubbleSort = function (arr) {
  // 분석
  // 이중 반복문을 통해 해결해야한다.
  // 수행시간 단축을 위한 고민은 우선 문제를 풀고난 이후에 해도 늦지 않다
  // 중간에 정렬이 완료되는 순간 반복문을 멈출 수 있는 조건문을 만들고 브레이크를 걸어야 한다.
  // for문 조건안에 카운트를 넣는다. 카운트가 +가 되면 한번이라도 자리를 바꿨다는 것이고
  // 카운트가 0이면 자리이동이 발생하지 않았다는 것이므로 바로 브레이크한다.

  // do while문을 실행하고, 변화가 있었는지 없었는지를 체크할 불리언 변수를 만든다.
  // 그리고 do while문 하위에 for문을 통해 현재 인덱스값과 다음 인덱스값을 비교한다.
  // 큰 값을 계속 우측으로 보내기 때문에 버블정렬인 것인데 1회 반복문만으로는 오름차순이 안될 수 있다.
  // 그래서 정렬이 완전히 완료될때까지 for문을 돌릴 수 있도록 change변수로 변화 유무를 체크하는 것이다.
  // 더 이상 변화될 게 없으면 change가 false를 유지하고 탈출할 것이기 때문이다.
  let change;
  do {
    change = false;
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        change = true;
      }
    }
  } while (change)

  return arr;
};




