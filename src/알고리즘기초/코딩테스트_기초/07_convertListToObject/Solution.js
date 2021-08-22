function convertListToObject(arr) {
  // 2차원 배열의 각 첫번째 인덱스가 키, 두번째 인덱스가 속성값으로 형성되어 객체에 담겨야 한다. 
  // 조건을 보니 arr[i].length가 0 또는 2로 고정되어 있어서, 이중 for문을 안써도 된다.
  // 내가 만든 코드는 arr[i]의 크기가 전부 달라도 작동되지 않을까 싶다.
  // 다음엔 주요조건들을 미리 체크해서 만들기!
  let obj = {};
  for (let el of arr) {
    for (let i = 0; i < el.length - 1; ++i) {
      if (el.length !== 0 && obj[el[i]] === undefined) {
        obj[el[i]] = el[i + 1];
      }
    }
  }
  return obj;
}






