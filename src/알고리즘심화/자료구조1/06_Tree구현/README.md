### 06_[Tree] 구현


***

###### 문제 

Tree 구현을 위한 기본적인 코드가 작성되어 있습니다. Tree 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

##### 맴버 변수

- 입력 데이터를 담을 수 있는 value
- 하위 노드를 저장할 수 있는 Array 타입의 children

##### 메서드

- insertNode(value): 입력받은 value를 Tree에 계층적으로 추가할 수 있어야 합니다.
- contains(value): 트리에 포함된 데이터를 찾을 수 있어야 합니다.

##### 주의사항

- value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한합니다.


##### 예시

const rootNode = new Tree(null);

for(let i = 0; i <= 4; i++) {
  if(rootNode.children[i]) {
    rootNode.children[i].insertNode(i)
  }
 rootNode.insertNode(i); 
}
rootNode; // {value: null, children: Array(5)}
rootNode.contains(5); //false
rootNode.contains(1); //true
...