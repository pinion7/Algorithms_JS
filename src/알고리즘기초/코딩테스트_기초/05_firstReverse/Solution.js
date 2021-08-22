function firstReverse(str) {
  // arr.reverse 사용을 위해선 우선 문자열을 배열화시켜야 한다.
  // split, reverse, join을 순서대로 사용하면 된다.
  // 변수를 주어서 진행해도 되지만 한번에 이어서 반환시킬 수도 있다.
  return str.split('').reverse().join('');
}






