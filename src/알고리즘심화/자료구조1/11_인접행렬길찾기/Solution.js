function getDirections(matrix, from, to) {
  // 방문을 했느냐 안했느냐의 여부로 접근을 해야만 한다.
  // 그리고 방문은 보통 자료구조 큐를 활용하는 게 좋고, 큐는 또 while문과 세트로 묶일 수 있다.
  // 큐배열은 간선이 이어져 있는 인덱스를 담아두고 빼내기를 지속적으로 반복하는 수단인데, 
  // 큐배열의 활용목적은 특정한 값의 일시적 보존을 위함이고, 결국 그 값과 to를 비교하여 from과 to가 결국 이어져 있는 지의 여부를 판단하기 위한 중간매개수단인 셈이다
  // 그리고 방문을 했는지의 여부를 나타내기 위한 배열도 하나 만드는데, 크기는 matrix의 행이나 열의 길이가 된다 (어차피 정사각 행렬이기 때문)
  // while문의 탈출 조건은 결국 큐배열에 더이상 간선이 연결된 값이 담길 수 있느냐 없느냐로 결정된다. (즉, 담기지 않는 순간 모든 길을 탐색한 것이기 때문)

  // 우선 선언부
  const queue = [];
  const visited = [];
  const currIndex = 0;
  
  // 초기값 대입, 0으로 채우는 이유는 0이 falsy한 값이기 때문이고, 즉 방문을 안했다는 표시를 위함임
  queue.push(from)
  visited = new Array(matrix.length).fill(0)

  // 1은 truthy한 값으로써 방문을 했다는 표시임. 이미 from은 자기 자신이기 때문에 방문한 상태라고 볼 수 있음
  visited[from] = 1;

  // 본격적인 방문여부 체크 시작을 위한 반복문
  while (queue.length > 0) {

    // 항상 반복문이 시작될 때마다 큐에 보관한 간선 도착 번호를 뽑아내서 현재값에 대입하고
    currIndex = queue.shift()

    // 그것을 to와 비교하여 연결 여부를 확인해야 한다.
    if (currIndex === to) {
      return true;
    }

    // 현재 인덱스번호에 해당하는 행의 1(true)의 값을 찾음으로써 간선을 파악하고, 동시에 방문여부도 체크해서 방문배열도 업데이트하려는 목적의 반복문이다
    for (let i = 0; i < matrix[currIndex].length; ++i) {
      if (matrix[currIndex][i] && !visited[i]) {
        queue.push(i);
        visited[i] = 1;
      }
    }
  }
  // while문을 탈출했다는 얘기는 from과 to가 연결되어 있지 않다는 뜻과 같다. 탐색을 전부했음에도 연결고리가 없었던 것이다.
  return false;
}