const sudoku = function (board) {
  // 분석
  // 스도쿠를 적용하게되면 각 행과 각 열에는 모두 1~9까지 수가 한번씩만 들어가야 함
  // 동시에 박스 안에도 1~9가 한번씩만 들어가야 함

  // 풀이
  // 1. 우선 스도쿠의 아직 값이 입력안된(값이 0인) 좌표가 담긴 2차원 배열을 만들어보자.
  const coordinates = [];
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board.length; ++j) {
      if (board[i][j] === 0) {
        coordinates.push([i, j])
      }
    }
  }

  // 2. 스도쿠 삽입 가능 여부 체크 함수를 구현한다.
  const isValidCheck = (row, col, num) => {
    // 행렬 체크
    // 이건 간단
    for (let i = 0; i < 9; ++i) {
      if (num === board[row][i]) return false;
      if (num === board[i][col]) return false;
    }

    // 3*3 박스 체크
    // 3으로 나눴을 때 0,1,2번 인덱스는 (내림을 하면) 0이 나오고, 3,4,5번 인덱스는 1이 나오고... (이게 핵심 포인트!)
    // 거기에 3을 곱한 값을 변수에 대입한뒤, for문의 초기값으로 사용하고, 3더한값은 최대 범위로 지정하면
    // 3*3 박스 체크가 가능함.
    let rowBox = Math.floor(row / 3) * 3;
    let colBox = Math.floor(col / 3) * 3;
    for (let i = rowBox; i < rowBox + 3; ++i) {
      for (let j = colBox; j < colBox + 3; ++j) {
        if (num === board[i][j]) return false;
      }
    }

    // 위 체킹에서 걸리지 않으면 어디에도 중복되지 않는 숫자인 것. true 반환
    return true;
  }

  // 3. 스도쿠 삽입 함수부 (재귀 형태)
  const updateBoard = (count) => {
    // 종료조건
    if (count === coordinates.length) return;

    // 좌표 값 투입
    let [rowVal, colVal] = coordinates[count];

    // 행렬과 3*3에 포함되지 않은 수라면 투입
    // 그리고 재귀를 통해 다음 좌표에 값을 투입하기 위해 이동
    // 다음 좌표로 이동했으나 값투입이 불가능하다면 돌아와 초기화하여, 다시 다음 i부터 투입 진행
    for (let i = 1; i <= 9; ++i) {
      if (isValidCheck(rowVal, colVal, i)) {
        board[rowVal][colVal] = i;
        const result = updateBoard(count + 1);
        if (result) {
          board[rowVal][colVal] = 0;
        }
      }
    }
    // for문을 끝냈음에도 값을 넣을 수 없을 경우 true반환
    if (board[rowVal][colVal] === 0) return true;
    // 그렇지 않으면 false 반환
    else return false;
  }
  
  // 4. 스도쿠 보드 업데이트 함수 실행 및 결과 반환
  updateBoard(0);
  return board;
}




