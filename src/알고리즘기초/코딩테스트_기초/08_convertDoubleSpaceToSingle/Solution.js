function convertDoubleSpaceToSingle(str) {
  // 우선 배열화 시키고, 배열 값 중 빈문자열을 제외한 배열들만 포함하는 새로운 배열을 만든다.
  // 다시 문자열화 시키고 리턴한다.
  const arr = str.split(' ');
  const newArr = [];

  for (let el of arr) {
    if (el.length !== 0) {
      newArr.push(el);
    }
  }

  return newArr.join(' ');
}






