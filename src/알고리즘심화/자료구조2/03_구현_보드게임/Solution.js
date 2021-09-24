function boardGame(board, operation) {
  // operation에 담긴 문자에 따라 조건문을 설정해주고 
  // 좌표 값을 투입해서 누적해가면 된다.
  // 주의해야할 건 좌표값이 board를 벗어날 때이므로 
  // 이를 추가로 제한해줘야 한다.

  const moves = {
    'R': [0, 1],
    'L': [0, -1],
    'U': [-1, 0],
    'D': [1, 0],
  };
  let out_R = board.length;
  let out_C = board[0].length;

  const isValid = (row, col) => row >= 0 && row < out_R && col >= 0 && col < out_C;

  let [row, col] = [0, 0];
  let count = 0;
  for (let i = 0; i < operation.length; ++i) {
    let [moveR, moveC] = moves[operation[i]];
    row += moveR;
    col += moveC;
    if (!isValid(row, col)) return 'OUT';
    count += board[row][col];
  }

  return count;
}