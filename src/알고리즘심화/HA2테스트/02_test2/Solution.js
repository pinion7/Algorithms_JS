function test2(arr, id) {
  // 깊이 우선 탐색으로 재귀하는 방식이면 해결이 될 것 같다.
  for (let el of arr) {
    if (el.id === id) return el;
    else if (el.children !== undefined) {
      let result = test2(el.children, id);
      if (result) {
        return result;
      }
    }
  }
  return null;
}





