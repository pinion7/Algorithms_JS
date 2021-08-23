const primePassword = (curPwd, newPwd) => {
  // 풀이 1
  // 소수체크 함수부 구현
  const isPrime = (num) => {
    if (num % 2 === 0) return false;
    let newNum = parseInt(Math.sqrt(num))
    for (let i = 3; i <= newNum; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 첫 번째 체크, 이후 큐배열 및 방문여부 배열 만들기
  if (curPwd === newPwd) return 0;
  const queue = [];
  const visited = new Array(10000).fill(false);

  // 큐에 초기값 넣어준다. 변경 횟수와 현재 자리수를 배열의 형태로 넣는다.
  // 방문여부에도 체크 후, 반복문 시작
  queue.push([0, curPwd])
  visited[curPwd] = true;

  while (queue.length > 0) {
    // 큐에 들어온 값을 들어온 순서대로 구조분해할당해서 각 변수에 넣어준다.
    const [nowNum, nowPwd] = queue.shift()
    // 반복문을 중첩해서 돌리는데, 첫 번째 반복문은 nowArr을 탐색하는 것이고(4자리 숫자니까 3번 인덱스까지)
    for (let i = 0; i <= 3; ++i) {
      // 패스워드는 배열화를 해주고
      const nowArr = nowPwd.toString().split('').map(el => el * 1);
      // 두 번째 반복문은 한 자리 수 숫자면 모두 넣어볼 수 있기에 9까지 돌린다.
      for (let j = 0; j <= 9; ++j) {
        // 현재 자리수와 같은 숫자는 제외하고, 순차적으로 값을 바꾼다고 생각할 수 있다.
        if (j !== nowArr[i]) { 
          nowArr[i] = j;
          // 바꿨으면 바로 다시 숫자화 시켜서, 새로운 패스워드랑 동일한지 체크해준다.
          let nextPwd = nowArr.join('') * 1;
          if (nextPwd === newPwd) return nowNum + 1;

          // 다르면, 소수인지, 1000이상인지, 방문여부에 체크는 되었는지 확인한다.
          if (isPrime(nextPwd) && nextPwd > 1000 && !visited[nextPwd]) {
            // 만족하면 방문여부에 체크를 하고, 변경횟수 ++
            // 큐배열에 새롭게 넣는다.
            visited[nextPwd] = true;
            queue.push([nowNum + 1, nextPwd])
          } 
          // + 순환 구조 설명
          // 위 조건문들에 걸리지 않으면 다시 j가 ++되서 반복을하고, 만족되는 것만 큐배열에 넣게된다.
          // 마찬가지로 한바퀴를 다돌면 i가 1상승해서 다음 자리 수에 대해서도 같은 작업을하여 큐배열에 넣게 된다.
        }
      }
    }
  }
  return -1;
};