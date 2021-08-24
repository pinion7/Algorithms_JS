function isIsogram(str) {
  // 대문자나 소문자로 다 만들고 시작한다.
  // 나왔던 알파벳이 한번이라도 나오면 안되기 때문에, 최악의 경우 전부 비교하는 상황도 고려한다.
  // 이중 for문이 요구된다.
  str = str.toLowerCase();
  for (let i = 0; i < str.length; ++i) {
    for (let j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}







