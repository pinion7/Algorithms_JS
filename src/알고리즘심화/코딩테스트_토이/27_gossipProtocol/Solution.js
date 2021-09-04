const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // 풀이
  // 우선 매트릭스화 시켜서 좀 더 접근하기 쉽게 만들어준다.
  // 그리고 최대길이와 최소길이도 미리 체크해놓고, 디렉션 배열도 만든다.
  const newVillage = createMatrix(village).map(el => el.map(el2 => el2 * 1))
  let out_R = newVillage.length;
  let out_C = newVillage[0].length;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  
  // 범위 유효성 체크 함수도 만들어 주자.
  const isValid = (r, c) => {
    if (r >= 0 && c >= 0 && r < out_R && c < out_C) return true;
    return false;
  }

  // 시작점을 큐에 넣고, 카운트 변수 선언후 while문을 돌린다.
  const queue = [[row, col]];
  let count = 0;
  while (queue.length > 0) {

    let currLen = queue.length;
    for (let i = 0; i < currLen; ++i) {
      let [cur_R, cur_C] = queue.shift();
      // 이미 방문한 곳이면(0이면), 곧장 위로 올라가 다음 좌표 진행
      if (!newVillage[cur_R][cur_C]) continue;
      // 그게 아니라면(1이면) 0으로 값을 전환하여 방문된 마을임을 체크해주고
      newVillage[cur_R][cur_C] = 0;

      // 만들어둔 moves로 상하좌우를 항상 한번씩 다 체크하면서 큐에 넣어준다.
      moves.forEach(move => {
        let mov_R = cur_R + move[0]
        let mov_C = cur_C + move[1]
        if (isValid(mov_R, mov_C) && newVillage[mov_R][mov_C]) {
          queue.push([mov_R, mov_C]);
        }
      })
    }
    // for문 수행이 한번 끝나면 하루가 지난 셈이라 카운트를 해준다.
    ++count;
  }
  return count - 1;
}