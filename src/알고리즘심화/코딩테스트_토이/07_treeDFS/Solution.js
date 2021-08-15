let dfs = function (node) {
  // 풀이
  // 재귀호출과 배열하나를 활용해 풀면 되는데, 컨캣을 쓰면 편하다. 푸쉬를 쓸거면 스프레드 문법이 필요하다
  // 진입하자마자 현재 노드의 value를 result라는 배열 넣고, 현재노드의 children배열의 길이를 확인한다
  // 길이가 0이면 곧장 result를 리턴하면되고, 아니면 반목문에 들어가 배열을 탐색한다
  // 그 안에서 재귀호출을 하면, children이라는 배열이 있을 때 마다 재귀를 통해 계속 깊은 노드로 들어가게되고
  // 들어갈때마다 result에 value를 푸쉬하게 된다. 
  // 만약 배열의 길이가 0인 순간 재귀를 하나 탈출하여 돌아와 컨캣을 함으로써 쌓은 값을 붙여줄 수 있다.
  // 반복문이 끝나지 않았으면 해당 배열의 다음 인덱스를 탐색하여 같은 작업을 진행해줌으로써,
  // 깊이 이후에 -> 너비를 챙길 수 있게 도와주고 결국 더 깊게 갈 곳이 없을 때마다 재귀를 하나씩 풀고, 
  // 너비를 체크하는 식의 과정을 반복함으로써, 최종적으로 리턴될 result에 원하는 값들이 dfs 순으로 쌓이게 된다.
  let result = [];
  result.push(node.value);
  if (node.children.length === 0) return result;

  for (let i = 0; i < node.children.length; ++i) {
    result = result.concat(dfs(node.children[i]))
  }
  return result;
}

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};




