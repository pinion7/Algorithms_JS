const robotPath = function (room, src, dst) {
  // 가능한 모든 경우의 수를 체크하되, 최단 거리를 요구하기 때문에 
  // 반복문 수행시 카운트를 한번씩만 줌으로써 가장 빠른 거리가 리턴되도록 하면 된다.
  // 그리고 탐색을 할때에는 방문리스트를 만들어 왔던 길을 또가지 않도록 제한한다.

  // 풀이
  // 방문리스트 만들었다 삭제했다. 이미 룸자체가 0과 1로만 이루어져 있기 때문에
  // 그 값을 바꿔가면 방문여부 체크로 활용할 수 있다.

  // 좌표 범위를 설정해주기
  let out_R = room.length;
  let out_C = room[0].length;

  // 시작 좌표와 이동 횟수를 설정해주고,
  // 반복문을 통해 이동을 진행해보자.
  const queue = [src];
  let count = 0;
  // 도착 경로가 항상 존재하기 때문에 true놓고 시작하며 안에서 경로를 찾았을 때 결과를 반환하게 한다.
  // break도 필요가 없는 셈이다.
  while(true) {
    // 큐의 길이 만큼 뽑아서 이동 경우의 수를 체크한다.
    // 즉, 갈 수 있는 방향을 전부 체크하면서 이동 가능한 지점을 찾는 것이다.
    let currLen = queue.length;
    for (let i = 0; i < currLen; ++i) {
      // 항시 큐를 뽑아서 좌표를 세팅
      let [row, col] = queue.shift();
      // 이미 갔던 좌표면 곧장 위로 올라가 다음 큐를 탐색
      if (room[row][col]) continue;
      // 그게 아니면 같은지 확인하고 카운트 반환
      if (row === dst[0] && col === dst[1]) return count;
      // 그것도 아니면 벽(1)으로 바꿈으로써 방문여부 체크
      room[row][col] = 1;

      // 그리고 이동을 한다.
      // 이동할 수 있는 길을 전부 탐색하며 전진하는 방식이라 보면 된다.
      if (row + 1 < out_R && !room[row + 1][col]) {
        queue.push([row + 1, col])
      }
      if (col + 1 < out_C && !room[row][col + 1]) {
        queue.push([row, col + 1]);
      }
      if (row - 1 >= 0 && !room[row - 1][col]) {
        queue.push([row - 1, col]);
      }
      if (col - 1 >= 0 && !room[row][col - 1]) {
        queue.push([row, col - 1]);
      }
    }
    // 한번 전진 했으니 카운트 상승
    ++count;
  }
};