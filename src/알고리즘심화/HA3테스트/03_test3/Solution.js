function test3(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  // 경로 탐색 문제이다.
  // 단, 방문한 곳을 또 방문해도 점수를 획득할 수 없다.

  // 풀이
  // 우선 이동 함수를 구현한다.
  const moves = {
    'R': [0, 1],
    'L': [0, -1],
    'U': [-1, 0],
    'D': [1, 0],
  }

  // 유효범위 길이를 따로 선언하고, 체크 함수도 만든다.
  let out_R = board.length;
  let out_C = board[0].length; 
  const isValid = (r, c) => r >= 0 && r < out_R && c >= 0 && c < out_C;

  // 첫 좌표 및 결과변수를 선언하고, 반복문을 돌려보자.
  let [row, col] = [0, 0]; 
  let result = 0;
  for (let i = 0; i < operation.length; ++i) {
    let [mRow, mCol] = moves[operation[i]];
    if (isValid(row + mRow, col + mCol)) {
      row += mRow;
      col += mCol;
      result += board[row][col];
      board[row][col] = 0;
    }
  }

  return result;
};




