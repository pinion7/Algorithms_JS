### 08_[Binary Search Tree] 구현


***

###### 문제 

Tree 구현을 위한 기본적인 코드가 작성되어 있습니다. Binary Search Tree 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

##### 맴버 변수

- 입력 데이터를 담을 수 있는 value
- 노드를 왼쪽에 저장할 수 있는 Array 타입의 left
- 노드를 오른쪽에 저장할 수 있는 Array 타입의 right

##### 메서드

- insert(value): 입력받은 value를 Binary Search에 맞게 Tree에 계층적으로 추가할 수 있어야 합니다.
- contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.
- preorder(callback): 전위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.
- inorder(callback): 중위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.
- postorder(callback): 후위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다.

##### 주의사항

- value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한합니다.

##### 예시

const rootNode = new BinarySearchTree(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
rootNode.left.right.value; // 8
rootNode.right.left.value; //11

let arr = [];
rootNode.preorder((value) => arr.push(value * 2));
arr; // [20, 14, 16, 24, 22]
...