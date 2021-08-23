function removeExtremes(arr) {
  // 주의사항을 해결하기 위해선 최대값 최소값 변수를 만들어야 될듯하다.
  // 리버스 함수를 활용하면 편할 것으로 예상된다. (그럼 마지막에 위치한 최대/최소 문자열을 제거할 수 있음)
  // 반복문으로 배열을 처음부터 끝까지 탐색해서 최대값과 최소값을 구한다.
  // splice() 함수를 활용해 최대 최소 문자열만 제거를 한다.
  // index번호는 indexOf함수를 통해 찾으면 된다.
  // 마지막에 리버스함수를 한번 더 사용하는 것을 잊지 않는다.
  arr.reverse();
  let maxLengthOfChar = arr[0]
  let minLengthOfChar = arr[0]

  for (let el of arr) {
    if (el.length > maxLengthOfChar.length) {
      maxLengthOfChar = el;
    }
    else if (el.length < minLengthOfChar.length) {
      minLengthOfChar = el;
    }
  }
  arr.splice(arr.indexOf(maxLengthOfChar), 1)
  arr.splice(arr.indexOf(minLengthOfChar), 1)

  arr.reverse();
  return arr;
}




