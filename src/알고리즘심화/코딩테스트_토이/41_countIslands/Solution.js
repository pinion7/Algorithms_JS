const countIslands = function (grid) {
  // bfs함수를 구현해놓고 활용한다.
  // grid와 같은 형태의 방문배열 만들고 체크한다.
  // bfs가 한번 체킹을 마치고 돌아올때마다 섬하나를 카운트해준다.
  // 방문된 곳은 다시 방문하지 않는다.

  // 풀이
  // 1. 방문배열을 만들어보자.
  const visited = grid.map(el => new Array(grid[0].length).fill(false));

  // 2. 유효 길이 체크 함수 구현
  if (grid.length === 0) return 0;
  let out_R = grid.length;
  let out_C = grid[0].length;
  const isValid = (row, col) => row < out_R && col >= 0 && col < out_C;

  // 3. bfs 구현
  const bfs = (row, col) => {
    const queue = [[row, col]];

    while (queue.length > 0) {
      let currLen = queue.length;
      for (let i = 0; i < currLen; ++i) {
        let [currR, currC] = queue.shift();
        if (visited[currR][currC]) continue;
        visited[currR][currC] = true;
        
        if (isValid(currR + 1, currC) && grid[currR + 1][currC] === '1') {
          queue.push([currR + 1, currC]);
        }
        if (isValid(currR, currC + 1) && grid[currR][currC + 1] === '1') {
          queue.push([currR, currC + 1]);
        }
        if (isValid(currR, currC - 1) && grid[currR][currC - 1] === '1') {
          queue.push([currR, currC - 1]);
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (!visited[i][j] && grid[i][j] === '1') {
        bfs (i, j);
        ++count;
      }
    }
  }

  return count;
};
