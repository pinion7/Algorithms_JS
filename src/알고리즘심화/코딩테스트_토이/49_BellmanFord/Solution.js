function BellmanFord(num, edges, start) {
  // TODO: 여기에 코드를 작성합니다.
  // 벨만 포드 알고리즘 함수를 구현해야 한다.

  // 풀이
  // 1. 결과 배열을 num + 1길이로 만들되 임의의 최대값을 넣어둔다.
  // num + 1길이로 만든 이유는 인덱스 접근을 쉽게하기 위해서다. 즉, 0번 배열은 더미이다.
  // 그리고 시작점은 경로값이 0일 것이다.
  const result = new Array(num + 1).fill(Number.MAX_SAFE_INTEGER);
  result[start] = 0;

  // 2. while 문으로 감싸서 경로의 값이 변했는지 여부를 체크해준다.
  // 변하지 않았으면 음수사이클이 만들어지지 않은 것이므로 곧장 탈출하여 결과를 리턴하면 되고
  // 변했다면 빈배열을 리턴해주면 된다.
  // 이를 위해 업데이트가 되었는지 여부를 판단하는 불리언 변수와 카운트 변수를 선언한다
  // 음수사이클이 없다면 count는 1인 상태에서 update가 false를 유지하면서 탈출하게 되고
  // 음수사이클이 있다면 update는 true를 유지하겠지만 count는 2이상이 되면서 탈출하게 된다.  
  let update = true;
  let count = 0;
  while (update && count < 2) {
    update = false;
    // 3. edges를 순회하며 요소별 출발지, 도착지, 거리값을 구하고, 
    // result의 도착지를 최소값으로 지속적으로 업데이트 해준다.
    for (let i = 0; i < edges.length; ++i) {
      let [src, dst, val] = edges[i];
      if (result[dst] > result[src] + val) {
        result[dst] = result[src] + val;
        update = true;
      }
    }
    // update가 되었다면 count가 상승한다.
    if (update) ++count;
  }

  // 음수사이클이 없다면 count는 1일 것이므로, 더미를 잘라내고 결과를 반환한다.
  if (count === 1) return result.slice(1);
  // 반면 음수사이클이 있었다면 count는 2이상일 것이므로 빈배열을 반환한다.
  return [];
}