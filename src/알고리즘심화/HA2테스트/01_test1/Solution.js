function test1() {
  // 우선 밖에다가 변수를 선언하고
  // 피보나치 작업이 안에서 이루어질 수 있도록 클로저함수를 만들어줘야할 것 같다.
  let num = 0;
  let arr = [0, 1]
  
  const fib = () => {
    if (num <= 1) return arr[num++];
    if (arr[num] !== undefined) return arr[num++];
    else {
      arr[num] = arr[num - 1] + arr[num - 2];
      return arr[num++];
    }
  }

  return fib;
}





