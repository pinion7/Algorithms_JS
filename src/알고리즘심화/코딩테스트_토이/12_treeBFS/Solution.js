let bfs = function (node) {
  // 풀이
  // 우선 bfs이기 때문에 큐를 만든다. node를 담아준다.
  let queue = []
  queue.push(node);

  // 결과 배열도 선언해주고, 큐와 세트로 움직이는 while문을 소환한다.
  const result = [];
  while (queue.length > 0) {
    // value를 삽입
    result.push(queue[0].value)

    // children 순회
    for (let i = 0; i < queue[0].children.length; ++i) {
      queue.push(queue[0].children[i]);
    }
    queue.shift();
  }
  return result
};

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