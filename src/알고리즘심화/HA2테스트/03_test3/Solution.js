function test3(insertEdges, removeEdges) {
  // 1. insertEdges의 크기에 맞게 버텍스 생성
  // 2. insertEdges에 해당되는 간선 모두 추가(undirected로)
  // 3. removeEdges에 해당하는 간선 제거 (undirected로)
  // 4. 버텍스 반환
  // 위 순서대로 진행하면 될 것 같다.

  let maxVal = insertEdges.reduce((acc, curr) => {
    if (acc < Math.max(...curr)) acc = Math.max(...curr);
    return acc;
  }, 0)

  let vertex = [];
  for (let i = 0; i <= maxVal; ++i) {
    vertex.push(new Array(maxVal + 1).fill(0))
  }

  for (let i = 0; i < insertEdges.length; ++i) {
    vertex[insertEdges[i][0]][insertEdges[i][1]] = 1;
    vertex[insertEdges[i][1]][insertEdges[i][0]] = 1;
  }

  for (let i = 0; i < removeEdges.length; ++i) {
    vertex[removeEdges[i][0]][removeEdges[i][1]] = 0;
    vertex[removeEdges[i][1]][removeEdges[i][0]] = 0;
  }

  return vertex;
}





