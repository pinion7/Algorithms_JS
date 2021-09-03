function browserStack(actions, start) {
  // 새로운 페이지로 갈때는, curr페이지를 prev스택에 push, next 스택을 텅비우기
  // 뒤로 가기 -> curr페이지를 next스택에 push, prev스택을 pop
  // 앞으로 가기 -> curr페이지를 prev스택에 push, next 스택을 pop
  // 브라우저가 앞으로 뒤로가기가 비활성 상태면 스택에 push 노노
  // 알파벳 대문자는 새로운 페이지 접속 행동
  // -1은 뒤로가기 행동
  // 1은 앞으로 가기 행동
  // prev와 next는 배열로 선언해서 준비
  // 현재값은 그냥 값으로 준비

  let prevStack = [];
  let nextStack = [];

  for (let el of actions) {
    if (typeof el === 'string') {
      prevStack.push(start);
      start = el;
      nextStack = [];
    }
    else if (el === 1 && nextStack.length !== 0) {
      prevStack.push(start);
      start = nextStack.pop();
    }
    else if (el === -1 && prevStack.length !== 0) {
      nextStack.push(start);
      start = prevStack.pop();
    }
  }

  return [prevStack, start, nextStack];
}