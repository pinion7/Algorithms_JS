function connectedVertices(edges) {
  // 정점의 연결을 확인하는 문제의 경우 ['버텍스']를 만들어주는 게 핵심이다.
  // 버텍스는 인접행렬인 매트릭스로 만들든, 아니면 인접리스트의 형태인 객체로 만들든 상관은 없다.
  // 중요한 건 버텍스를 만들기 위해선, 주어진 ['정점들 중에 최대값이 몇인지를 확인']해야만, 그 해당하는 크기의 버텍스를 만들 수 있다.
  // 우선 인접리스트 방식으로 구현을 하고, 추후 인접행렬 방식으로도 구현을 도전해보겠다.

  // edges의 최대값을 먼저 구한다. 이를 위해 reduce 함수를 사용하겠다.
  const maxVal = edges.reduce((acc, curr) => {
    if (acc < Math.max(...curr)) return Math.max(...curr);
    return acc;
  }, 0);

  // 반복문을 돌려서 버텍스 크기만큼의 인접리스트를 생성한다
  // 동시에 방문여부를 체크할 객체도 만들어 우선 false를 채워둔다.
  const adjList = {};
  const visited = {};
  for (let i = 0; i <= maxVal; ++i) {
    adjList[i] = [];
    visited[i] = false; // 안써도 되는 부분. 놀라운 사실은 따로 false로 선언하지 않아도 빈 객체에 정의되지 않은 키-속성값을 볼러내면 false로 판정되는 것 같다.
  }

  // edges 전체를 순회하며 각 배열의 연결값들을 확인하고 무방향이라는 걸 유의하여, 완성된 버텍스에 인접값들을 전부 담는다.
  for (let i = 0; i < edges.length; ++i) {
    adjList[edges[i][0]].push(edges[i][1]) 
    adjList[edges[i][1]].push(edges[i][0])
  }

  // 이제는 방문여부를 확인하여 연결점이 어디까지 뻗어있는지르 체크하고, 연결이 더 이상 안되는 순간 끊어서 카운트를 올려주고, 
  // 다시 미연결 부분부터 탐색하여 또 연결이 안될때까지 카운트를 해주는 구조의 작업을 해야한다. 
  // 일단 버텍스에 인접리스트가 완성되었기 때문에, 모든 배번을 순회하면서 방문여부를 체크하면 될 것이다.
  // 단 bfs 함수를 따로 선언하여 방문여부를 체크한다.
  let count = 0;
  for (let i = 0; i <= maxVal; ++i) {
    if (!visited[i]) {
      bfs (adjList, i, visited)
      // dfs (adjList, i, visited)
      count ++
    }
  }
  return count;

  // bfs를 함수를 만드는 이유는, 위의 반복문 내부에서 모든 걸 쓰려고하면 굉장히 복잡해질 수 있기 때문이다.
  // 그래서 bfs함수는 연결된 모든 것을 1차적으로 다 수행한 결과를 체크해줌으로써 곧장 카운트를 올려도 될 수 있게 한다.
  // 이후에는 연결이 안되어 있는 값을 다시 찾아서 또 bfs해주는 방식을 사용하면 컴포넌트 별로 카운트를 올려, 반복문이 끝난 순간 컴포넌트의 개수를 반환해줄 수 있게 된다.
  function bfs (adjList, vertexVal, visited) {
    // 큐를 선언해주고, 큐의 값을 지속적으로 받을 현재인접리스트배열 번호가 담길 변수도 선언해준다.
    // 그리고 동시에 큐에는 최초의 조사 값을 넣어주고, 최초의 시작점은 방문 상태로 봐야되기 때문에 true를 넣고 시작한다.
    const queue = [vertexVal];
    visited[vertexVal] = true;

    // while문의 경우 큐와 쌍으로 다닌다. 큐에 더이상 조사할 인접리스트 배열이 없을 경우(연결점이 끊기는 순간) 탈출한다.
    // queue배열부는 여러개가 많이 쌓인 상태가 될 수 있지만, 어차피 쉬프트로 하나씩 배출되기 때문에 결국 전부 탐색이 가능하다.
    while (queue.length > 0) {
      let curr = queue.shift();
      for (let i = 0; i < adjList[curr].length; ++i) {
        if (!visited[adjList[curr][i]]) {
          visited[adjList[curr][i]] = true;
          queue.push(adjList[curr][i]);
        }
      }
    }
  }

  // dfs로도 가능하다.
  // function dfs (adjList, vertexVal, visited) {
  //   visited[vertexVal] = true;
  //   for (let i = 0; i < adjList[vertexVal].length; ++i) {
  //     if (!visited[adjList[curr][i]]) {
  //       dfs (adjList, adjList[vertexVal][i], visited)
  //     }
  //   }
  // }
}