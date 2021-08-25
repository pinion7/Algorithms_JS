const balancedBrackets = function (str) {
  // 풀이1 
  // 스택을 이용하면 쉽게 풀린다. 
  // 풀이 2보다 시간복잡도 효율이 어마무시하게 훨씬 좋다.
  const stack = [];
  const bracket = ['()', '{}', '[]']
  for (let el of str) {
    stack.push(el);
    if (bracket.includes(stack[stack.length - 2] + stack[stack.length - 1])) {
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length === 0) return true;
  return false;
}