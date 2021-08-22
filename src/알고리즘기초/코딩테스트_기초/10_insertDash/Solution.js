function insertDash(str) {
  // 문자열을 반복문으로 탐색한다.
  // 홀수가 연속적으로 나오면 사이에 '-'를 삽입한다.
  // 문자열은 중간 수정이 안되기 때문에 새로운 변수에 문자열을 담는 방식으로 한다.
  // 짝수가 나오면 그대로 담고, 홀수가 나오면 다음에 나올 숫자도 홀수인지를 판단해 '-'를 삽입해준다
  // i + 1이 아닌 i - 1과 비교했더니 더 쉽게 풀리는듯 하다.
  let newStr = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] % 2 === 0) {
      newStr += str[i];
    }
    else if (str[i] % 2 !== 0 && str[i - 1] % 2 !== 0) {
      newStr += '-' + str[i];      
    }
    else {
      newStr += str[i];
    }
  }
  return newStr;
}



