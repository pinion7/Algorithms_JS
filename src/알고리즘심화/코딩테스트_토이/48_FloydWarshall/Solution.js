function createGraphByList(num, edges) {
  // 연결 리스트로 그래프 구현
  // 정확하게 연결 리스트는 아니지만,
  // 저장 공간을 줄일 수 있고, 간선 조회가 O(E)라는 점에서 비슷
  const _edges = {};
  for (let i = 1; i <= num; i++) _edges[i] = [];
  edges.forEach(([src, dst, weight]) => {
    // 방향성 그래프이므로 한쪽 방향에만 간선을 추가한다. (그러므로 하나만 남겨야 한다. 아래줄 삭제)
    _edges[src].push({ node: dst, weight: weight });
  });
  return _edges;
}

function createGraphByMatrix(num, edges) {
  // 인접 행렬로 그래프 구현
  // num X num 만큼의 저장 공간이 필요
  // 아래에서는 인덱스를 직관적으로 관리하기 위해 (num + 1) X (num + 1)의 공간을 사용
  // 간선 조회는 O(1)
  const matrix = [];
  // 간선은 100 이하의 양의 정수 이므로 경로가 없는 경우 101로 초기화한다.
  // INF는 INFINITY의 약자이다.
  const INF = 101;
  for (let i = 0; i <= num; i++) {
    // 최단거리를 구해야하기 때문에, 간선이 없는 구간의 거리는 무한대로 간주한다.
    // 엄밀한 의미의 무한대는 불가능하므로, 런타임(node.js)이 표현할 수 있는 가장 큰 수로 초기화한다.
    matrix.push(Array(num + 1).fill(INF));
    // 자기 자신과의 거리는 0
    matrix[i][i] = 0;
  }
  edges.forEach(([src, dst, weight]) => {
    // 방향성 그래프이므로 한쪽 방향에만 간선을 추가한다. (하나만 남겨야 한다.)
    matrix[src][dst] = weight;
  });
  return matrix;
}

function FloydWarshall(num, edges) {
  // TODO: 여기에 코드를 작성합니다.
  // 풀이 1: 인접 행렬 방식
  // 우선 주어진 숫자와 배열을 바탕으로 행렬을 만든다.
  const matrix = createGraphByMatrix(num, edges);

  // 간선과 간선간의 최소값을 지속적으로 업데이트 하기 위한 3중 반복문을 만든다.
  // 1번 반복문은 출발지와 도착지 간의 연결고리가 되는 매개 위치를 제공한다. (출발지에게는 열로써, 도착지에게는 행으로써 매개 역할을 한다.)
  for (let link = 1; link <= num; ++link) {
    // 2번 반복문은 출발값(행값)을 제공한다.
    for (let start = 1; start <= num; ++start) {
      // 3번 반복문은 도착값(열값)을 제공한다.
      for (let end = 1; end <= num; ++end) {
        // 최소값을 업데이트 해보자. 만약 매개 link를 경유하여 지난 값들의 합보다 
        // link를 거치지 않고 이어진 값이 더 크다면, 해당 좌표의 최소값(경유한 값)을 업데이트 해준다.
        // 이를 지속적으로 업데이트 하게되면, 두번 세번 매개해서 이어지는 간선의 최소값으로 활용되어지게 되고
        // 결국 모든 경로를 최소값으로 업데이트 해줄 수 있게 된다.
        if (matrix[start][link] + matrix[link][end] < matrix[start][end]) {
          matrix[start][end] = matrix[start][link] + matrix[link][end];
        }
      }
    }
  }

  // 이제 0번행과 0번열들은 더미값이기 때문에 전부 삭제해주자.
  const result = matrix.slice(1).map(row => {
    return row.slice(1);
  })
  
  // 마지막으로 간선이 없는 곳에 null 넣어주는 작업을 하고 리턴한다.
  return result.map(row => {
    return row.map(col => {
      if (col === 101) return null;
      return col;
    })
  })
}