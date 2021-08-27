const LPS = function (str) {
  // 접두어와 접미어의 길이가 같으면서 가장 긴 것을 구해야 한다.
  // 다만 두 개가 인덱스를 서로 침범하지 않는 선에서 작업을 해야 한다.

  // 풀이 1
  // 반복문을 돌리면서 슬라이스를 통해 비교해주면 되지 않을까?
  // 우선 결과값을 담을 변수를 선언해 주고
  // 중앙 값도 구해주자
  let result = 0;
  let centerIdx = Math.floor(str.length / 2);

  for (let i = 1; i <= centerIdx; ++i) {
    if (str.slice(0, i) === str.slice(-1 * i)) {
      result = i;
    }
  }
  return result;
};