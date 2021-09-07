// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  if (idx % 2 === 0) return idx / 2 - 1;
  return parseInt(idx / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);

  let childIdx = heap.length - 1;
  let parentIdx = getParentIdx(childIdx);

  while (heap[childIdx] < heap[parentIdx]) {
    swap (parentIdx, childIdx, heap);
    childIdx = parentIdx;
    parentIdx = getParentIdx(childIdx);
  }

  return heap;
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  heap[0] = heap[heap.length - 1];
  heap.pop();
  if (heap.length === 0) return heap;

  let grandParentIdx;
  let parentIdx = 0;
 
  while (grandParentIdx !== parentIdx) {
    grandParentIdx = parentIdx;
    let leftIdx = (parentIdx + 0.5) * 2;
    let rightIdx = (parentIdx + 1) * 2;
    if (leftIdx < heap.length && heap[leftIdx] < heap[parentIdx]) {
      parentIdx = leftIdx;
    }
    if (rightIdx < heap.length && heap[rightIdx] < heap[parentIdx]) {
      parentIdx = rightIdx;
    }
    swap(grandParentIdx, parentIdx, heap);
  }

  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

const heapSort = function (arr) {
  let heap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  const minHeap = []
  while (heap.length > 0) {
    minHeap.push(heap[0]);
    heap = removeRoot(heap);
  }
  return minHeap;
};
