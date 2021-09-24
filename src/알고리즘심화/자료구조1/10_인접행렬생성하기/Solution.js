function createMatrix(edges) {
  // 풀이
  // 버텍스 만들어주기
  // 방향에 따라 간선 추가

  // 버텍스를 만들기 위해선 입력 배열의 최대값을 먼저 찾아야만 버텍스의 크기를 정할 수 있다.
  // 리듀스 함수로 찾아보겠다.
  const maxVal = edges.reduce((acc, curr) => {
    if (acc < Math.max(...curr.slice(0, 2))) {
      return Math.max(...curr.slice(0, 2));
    }
    return acc;
  }, 0)

  // 버텍스 만들기. 최대값이 인덱스번호라고 생각해야되기 때문에 행렬이 +1씩 더 큰 매트릭스가 되어야 한다.
  const matrix = [];
  for (let i = 0; i < maxVal + 1; ++i) {
    matrix.push(new Array(maxVal + 1).fill(0));
  }

  // 반복문으로 순회하면서 간선을 추가한다.
  for (let el of edges) {
    if (el[2] === 'directed') {
      matrix[el[0]][el[1]] = 1;
    }
    else {
      matrix[el[0]][el[1]] = 1;
      matrix[el[1]][el[0]] = 1;
    }
  }
  
  return matrix;
}