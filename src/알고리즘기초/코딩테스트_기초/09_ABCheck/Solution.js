function ABCheck(str) {
  // 문자열을 탐색하며 a로 시작하거나 b로 시작하는 위치를 우선 찾는다
  // 조건문을 활용해야하며 해당조건과 함께 a+4 인덱스의 문자가 b인지, b+4 인덱스의 문자가 a인지를 판단한다 
  // 존재하면 참 아니면 거짓을 반환한다.

  // 통과는 됐지만 좀 더 간소화시킬 수도 있음을 알았음
  // 수정해서 2차 제출할 예정
  str = str.toUpperCase();
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === 'A' && str[i + 4] === 'B') {
        return true;
    }
    else if (str[i] === 'B' && str[i + 4] === 'A') {
        return true;
    }
  }
  return false;
}





