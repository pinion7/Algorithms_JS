const robotPath2 = function (room, src, sDir, dst, dDir) {
  // 위쪽이 1, 오른쪽이 2, 아래쪽이 3, 왼쪽이 4
  // 풀이
  // 우선 행과 열의 범위 밖을 지정해준다.
  const out_R = room.length;
  const out_C = room[0].length;

  // 4방향에 따른 무브 변수를 만든다.
  // 상우하좌를 각각 1,2,3,4로 지정을 해줬기 때문에 그에 맞춰 만들면 된다.
  // 배열의 두번째요소는 방향에따라 행 값이 어떻게 변화하는가 이고, 세번째는 열의 변화에 해당 된다.
  const moves = [
    [1, -1, 0],
    [2, 0, 1],
    [3, 1, 0],
    [4, 0, -1]
  ]

  // 범위 내에 있는지를 판단하는 유효성체크 함수를 구현한다.
  const isValid = (row, col) => (row < out_R && row >= 0 && col < out_C && col >= 0)

  // 위치마다 최소동작으로 도달 가능한 방향을 저장할 변수와, 위치마다 최소 동작의 수를 저장할 거리 변수를 선언한다.
  const directions = [];
  const distance = [];

  for (let i = 0; i < room.length; ++i) {
    directions.push(new Array(out_C).fill(0));
    distance.push(new Array(out_C).fill(Number.MAX_SAFE_INTEGER));
  }

  // 로봇 문제는 항상 bfs로 해결해야 한다.
  // 큐에 시작좌표를 넣고, 각종 초기값 및 목표 좌표에 해당하는 변수들도 선언한 뒤, while문을 만든다.
  const queue = [src];
  // 아래는 첫 좌표에 첫 방향값을 넣어주는 것이고
  directions[src[0]][src[1]] = sDir;
  // 아래는 첫 좌표에 이동거리를 0으로 만들어주는 것이다. (시작점이라 0인 것)
  distance[src[0]][src[1]] = 0;
  // 아래는 목표 좌표 변수를 선언한 것. (목표 방향은 매개변수로 주어진 dDir)
  const [goalRow, goalCol] = dst;

  while (queue.length > 0) {
    // 반복문의 시작엔 항상 현재 기준이될 좌표를 담는다.
    const [curRow, curCol] = queue.shift();
    // 그 현재 좌표에 해당하는 방향 값을 투입
    const curDir = directions[curRow][curCol];

    for (let i = 0; i < moves.length; ++i) {
      // 무브스를 전부 탐색함으로써 bfs를 진행해야 한다.
      // 새롭게 가리키는 방향, 행변화, 열변화를 각각 변수에 담는다.
      const [newDir, rowDiff, colDiff] = moves[i];

      // 이를 바탕으로 '현재 좌표'에 무브값들을 더한 새로운 좌표값을 구한다.
      const newRow = curRow + rowDiff;
      const newCol = curCol + colDiff;

      // 곧장 유효범위인지 부터 체크한다.
      // 이동좌표가 범위 밖이거나, 벽(1)이면 즉각 위로 올라가 다음 요소를 탐색한다.
      if (!isValid(newRow, newCol) || room[newRow][newCol]) continue;

      // 현재 위치의 방향에서 목표 위치의 방향의 차이도 구한다. (얼마나 방향전환 했는지를 체크하는 것)
      // 절대값을 통해 구해야 음수를 필터할 수 있다. 
      // 상하끼리 혹은 좌우끼리는 차이가 2이고, 같은 방향이면 0, 그 외 다른 케이스는 1의 차이가 날 것이다.
      const dirDiff = Math.abs(newDir - curDir)

      // 위에서 걸리지 않았다면 새로운 경로 이동에 따른 방향전환 값과 현재까지의 이동값을 합산한 결과를 담아야 한다.
      // 우선 방향 전환 카운팅 (방향 전환에 따른 횟수 카운팅은 0, 1, 2인 경우 3가지다)
      let moveCount = 0;

      // 0인 경우
      // 이동 전이나 후나 같은 방향을 바라보고 있는 경우
      if (dirDiff === 0) {
        moveCount = distance[curRow][curCol] || 1;
      }
      // 이동 전과 후가 상하나 좌우인 경우 
      else if (dirDiff === 2) {
        // 회전 2회 + 직진 1회 = 3
        moveCount = distance[curRow][curCol] + 3;
      }
      // 그 외에 1차이인 경우
      else {
        // 회전 1회 + 직진 1회 = 2
        moveCount = distance[curRow][curCol] + 2;
      }

      if (newRow === goalRow && newCol === goalCol) {
        // 목표좌표와 같다면 마지막 방향변화 값을 newDir에서 dDir(목표 방향값)을 빼주어 구하고
        const dirDiff = Math.abs(newDir - dDir)
        // 조건에 맞춰 이동값 전환횟수를 가산한다.
        if (dirDiff === 0) {
          moveCount += 0;
        }
        else if (dirDiff === 2) {
          moveCount += 2;
        }
        else {
          moveCount += 1;
        }
      }

      if (moveCount < distance[newRow][newCol]) {
        // 이동이 가능했던 좌표인데 목표좌표와 같지 않아서 이 조건문까지 내려왔다면
        // 큐에 푸쉬를 해줘서 탐색을 또 진행해줘야 한다.
        queue.push([newRow, newCol]);
        // 처음엔 값이 무한대일 것이고, 진행될수록 최소값들이 쌓이게 된다. (여러 경로중 최소 횟수가 저장)
        distance[newRow][newCol] = moveCount;
        // 방향도 무브스를 통해 진행했던 방향값을 넣어줘야 한다.
        directions[newRow][newCol] = newDir;
      }
    }
  }

  // 탐색이 모두 완료된 뒤, 목표좌표에 저장된 값을 반환하면
  // 최소값이 리턴될 것이다.
  return distance[goalRow][goalCol];
};