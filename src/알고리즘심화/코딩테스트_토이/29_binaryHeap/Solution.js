// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  // 부모노드는 현재인덱스 나누기 2를 하되, idx가 홀수면 내림한게 부모 인덱스고,
  // idx가 짝수면 -1을 한 것이 부모인덱스이다.
  if (idx % 2 === 0) return idx / 2 - 1;
  return parseInt(idx / 2);
  // 0 - 1 - 2
  // 1 - 3 - 4
  // 2 - 5 - 6
  // 3 - 7 - 8
  // 4 - 9 - 10
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);

  let childIdx = heap.length - 1;
  let parentIdx = getParentIdx(childIdx);

  while (heap[parentIdx] < heap[childIdx]) {
    swap(parentIdx, childIdx, heap);
    childIdx = parentIdx;
    parentIdx = getParentIdx(childIdx);
  }
  
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
